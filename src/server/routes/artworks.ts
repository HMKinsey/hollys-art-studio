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
    res.status(401).json({ error: 'Please sign in before uploading artwork.' });
    return;
  }

  const adminEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  if (!adminEmail) {
    res.status(503).json({ error: 'Artwork uploads are not configured.' });
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
      res.status(403).json({ error: 'You are not allowed to upload artwork.' });
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
  let operation = 'upload image to artwork-images';

  try {
    const { data: uploadedFile, error: uploadError } = await supabase.storage
      .from(artworkBucket)
      .upload(filePath, file.buffer, { contentType: file.mimetype });

    if (uploadError) {
      throw uploadError;
    }

    operation = 'save artwork details to the artwork table';
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
    const message =
      error instanceof Error
        ? error.message
        : typeof error === 'object' &&
            error !== null &&
            'message' in error &&
            typeof error.message === 'string'
          ? error.message
          : 'Unknown Supabase error.';
    console.error(`Artwork upload failed while trying to ${operation}:`, error);
    res.status(500).json({
      error: `Unable to ${operation}: ${message}`,
    });
  }
});

export default router;
