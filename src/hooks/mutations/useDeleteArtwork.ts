import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiUrl, readApiResponse } from '../../api/client';
import { artworksQueryKey } from '../queries/artworksQueryKey';

interface DeleteArtworkVariables {
  artworkId: string;
  token: string | null;
}

interface DeleteArtworkResult {
  id: string;
  warning?: string;
}

export function useDeleteArtwork(onUnauthorized: () => void) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ artworkId, token }: DeleteArtworkVariables) => {
      if (!token) {
        throw new Error('You must be logged in to delete artwork.');
      }

      const response = await fetch(
        apiUrl(`/api/admin/artworks/${encodeURIComponent(artworkId)}`),
        {
          method: 'DELETE',
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (response.status === 401) {
        onUnauthorized();
      }

      const result = await readApiResponse<
        DeleteArtworkResult & { error?: string }
      >(response);

      if (!response.ok) {
        throw new Error(result.error ?? 'Failed to delete artwork.');
      }

      return result;
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: artworksQueryKey });
    },
  });
}
