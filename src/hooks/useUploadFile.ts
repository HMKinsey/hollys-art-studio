import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiUrl } from '../lib/api';
import type { Artwork } from '../types/artwork';

interface UploadVariables {
  file: File;
  name: string;
  token: string | null;
}

export function useUploadFile(onUnauthorized: () => void) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ file, name, token }: UploadVariables) => {
      if (!token) {
        throw new Error('You must be logged in to upload files.');
      }

      const formData = new FormData();
      formData.append('name', name);
      formData.append('file', file);

      const response = await fetch(apiUrl('/api/admin/artworks'), {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });
      const result = (await response.json()) as Artwork | { error?: string };

      if (response.status === 401) {
        onUnauthorized();
      }

      if (!response.ok) {
        throw new Error(
          'error' in result && result.error
            ? result.error
            : 'Failed to upload artwork.'
        );
      }

      return result as Artwork;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['artworks'] });
    },
  });
}
