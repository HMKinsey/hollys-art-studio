import { supaBase } from '../lib/supabase';
import type { Artwork } from '../types/artwork.types';

export async function getArtworks(): Promise<Artwork[]> {
  const { data, error } = await supaBase
    .from('artwork')
    .select('id, name, image_path');

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
