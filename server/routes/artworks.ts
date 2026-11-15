import { randomUUID } from 'node:crypto';
import {
  Router,
  type NextFunction,
  type Request,
  type Response,
} from 'express';
import multer from 'multer';
import { supabase } from '../supabase';

const router = Router();
const artworkBucket = 'artwork-images';
const imageExtensions: Record<string, string> = {
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
  'image/gif': 'gif',
  'image/heic': 'heic',
  'image/heif': 'heif',
};

function getArtworkStoragePath(imagePath: string): string | null {
  const storagePrefix = `/storage/v1/object/public/${artworkBucket}/`;
  const pathname = new URL(imagePath).pathname;
  const prefixIndex = pathname.indexOf(storagePrefix);

  if (prefixIndex === -1) {
    return null;
  }

  const encodedPath = pathname.slice(prefixIndex + storagePrefix.length);
  if (!encodedPath) {
    return null;
  }

  return encodedPath
    .split('/')
    .map((segment) => decodeURIComponent(segment))
    .join('/');
}

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 20 * 1024 * 1024 },
  fileFilter: (_req, file, callback) => {
    if (!imageExtensions[file.mimetype]) {
      callback(new Error('Choose a JPEG, PNG, WebP, GIF, or HEIC image.'));
      return;
    }

    callback(null, true);
  },
});

function parseUpload(req: Request, res: Response, next: NextFunction) {
  upload.single('file')(req, res, (error: unknown) => {
    if (!error) {
      next();
      return;
    }

    if (
      error instanceof multer.MulterError &&
      error.code === 'LIMIT_FILE_SIZE'
    ) {
      res.status(413).json({ error: 'The image must be smaller than 20 MB.' });
      return;
    }

    res.status(400).json({
      error:
        error instanceof Error ? error.message : 'Unable to process the image.',
    });
  });
}

async function requireAdmin(req: Request, res: Response, next: NextFunction) {
  const token = req.header('authorization')?.match(/^Bearer\s+(.+)$/i)?.[1];
  if (!token) {
    res.status(401).json({ error: 'Please sign in before managing artwork.' });
    return;
  }

  const adminEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  if (!adminEmail) {
    res.status(503).json({ error: 'Artwork management is not configured.' });
    return;
  }

  try {
    const { data, error } = await supabase.auth.getUser(token);
    if (error || !data.user) {
      res
        .status(401)
        .json({ error: 'Your session is invalid or has expired.' });
      return;
    }

    if (data.user.email?.trim().toLowerCase() !== adminEmail) {
      res
        .status(403)
        .json({ error: 'You do not have permission to manage artwork.' });
      return;
    }

    next();
  } catch (error: unknown) {
    console.error('Artwork upload authorization failed:', error);
    res.status(500).json({ error: 'Unable to verify upload authorization.' });
  }
}

router.post('/', requireAdmin, parseUpload, async (req, res) => {
  const name = typeof req.body.name === 'string' ? req.body.name.trim() : '';
  const file = req.file;

  if (!name || !file) {
    res
      .status(400)
      .json({ error: 'Artwork name and image file are required.' });
    return;
  }
  const filePath = `${randomUUID()}.${imageExtensions[file.mimetype]}`;

  try {
    const { data: uploadedFile, error: uploadError } = await supabase.storage
      .from(artworkBucket)
      .upload(filePath, file.buffer, { contentType: file.mimetype });

    if (uploadError) {
      throw uploadError;
    }

    const { data: publicUrlData } = supabase.storage
      .from(artworkBucket)
      .getPublicUrl(uploadedFile.path);

    const { data: artwork, error: insertError } = await supabase
      .from('artwork')
      .insert({ name, image_path: publicUrlData.publicUrl })
      .select('id, name, image_path')
      .single();

    if (insertError) {
      const { error: cleanupError } = await supabase.storage
        .from(artworkBucket)
        .remove([uploadedFile.path]);

      if (cleanupError) {
        console.error(
          'Failed to remove uploaded artwork after insert failure:',
          cleanupError
        );
      }

      throw insertError;
    }

    res.status(201).json(artwork);
  } catch (error: unknown) {
    console.error('Artwork upload failed:', error);
    res.status(500).json({ error: 'Unable to save artwork.' });
  }
});

router.delete('/:id', requireAdmin, async (req, res) => {
  try {
    const artworkId = req.params.id;
    const { data: artwork, error: lookupError } = await supabase
      .from('artwork')
      .select('id, image_path')
      .eq('id', artworkId)
      .maybeSingle();

    if (lookupError) {
      throw lookupError;
    }

    if (!artwork) {
      res.status(404).json({ error: 'Artwork not found.' });
      return;
    }

    const storagePath = getArtworkStoragePath(artwork.image_path);
    if (!storagePath) {
      res.status(500).json({ error: 'Unable to locate the artwork image.' });
      return;
    }

    const { error: deleteError } = await supabase
      .from('artwork')
      .delete()
      .eq('id', artworkId);

    if (deleteError) {
      throw deleteError;
    }

    const { error: storageError } = await supabase.storage
      .from(artworkBucket)
      .remove([storagePath]);

    if (storageError) {
      console.error(
        'Artwork was deleted, but its image file could not be removed:',
        storageError
      );
      res.json({
        id: artworkId,
        warning:
          'Artwork was removed from the gallery, but its image file could not be deleted.',
      });
      return;
    }

    res.json({ id: artworkId });
  } catch (error: unknown) {
    console.error('Artwork deletion failed:', error);
    res.status(500).json({ error: 'Unable to delete artwork.' });
  }
});

export default router;
