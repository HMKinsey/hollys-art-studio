import { useQuery } from '@tanstack/react-query';
import { getArtworks } from '../../api/artworks.api';
import { artworksQueryKey } from './artworksQueryKey';

export function useArtworks() {
  return useQuery({
    queryKey: artworksQueryKey,
    queryFn: getArtworks,
  });
}
