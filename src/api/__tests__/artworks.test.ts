import { jest } from '@jest/globals';
import { supaBase } from '../../lib/supabase';
import type { Artwork } from '../../types/artwork';
import { getArtworks } from '../artworks';

jest.mock('../../lib/supabase.js', () => ({
  supaBase: {
    from: jest.fn(),
  },
}));

type ArtworkQueryResult = {
  data: Artwork[] | null;
  error: { message: string } | null;
};

type ArtworkQuery = {
  select: (columns: string) => Promise<ArtworkQueryResult>;
};

const mockFrom = supaBase.from as unknown as jest.MockedFunction<
  (table: string) => ArtworkQuery
>;

const artworks: Artwork[] = [
  {
    id: '1',
    name: 'Sunset over the sea',
    image_path: 'https://example.com/sunset.jpg',
  },
];

describe('getArtworks', () => {
  beforeEach(() => {
    mockFrom.mockReset();
  });

  it('returns the artwork rows selected from Supabase', async () => {
    const select = jest.fn<ArtworkQuery['select']>();
    select.mockResolvedValue({ data: artworks, error: null });
    mockFrom.mockReturnValue({ select });

    await expect(getArtworks()).resolves.toEqual(artworks);
    expect(mockFrom).toHaveBeenCalledWith('artwork');
    expect(select).toHaveBeenCalledWith('id, name, image_path');
  });

  it('throws when Supabase returns an error', async () => {
    const select = jest.fn<ArtworkQuery['select']>();
    select.mockResolvedValue({
      data: null,
      error: { message: 'Database unavailable' },
    });
    mockFrom.mockReturnValue({ select });

    await expect(getArtworks()).rejects.toThrow('Database unavailable');
  });
});
