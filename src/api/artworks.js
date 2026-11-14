import { supaBase } from '../lib/supabase';

export async function getArtworks() {
  const { data, error } = await supaBase.from('artwork').select('*');

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
