import { fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { jest } from '@jest/globals';
import { renderWithQueryClient } from '../utils/renderWithQueryClient';
import SelectedArtwork from '../../src/components/SelectedArtwork';
import type { Artwork } from '../../src/types/artwork.types';

jest.mock('../../src/api/client', () => {
  return {
    apiUrl: jest.fn((path: string) => path),
    readApiResponse: jest.fn(async (response: Response) => response.json()),
  };
});

const mockFetch = jest.fn<typeof fetch>();
const originalFetch = globalThis.fetch;

const artwork: Artwork = {
  id: 'artwork-42',
  name: 'Blue Flowers',
  image_path: 'https://example.com/blue-flowers.jpg',
};

function jsonResponse(body: unknown, status = 200): Response {
  return {
    ok: status >= 200 && status < 300,
    status,
    json: async () => body,
  } as Response;
}

describe('SelectedArtwork', () => {
  beforeEach(() => {
    mockFetch.mockReset();
    globalThis.fetch = mockFetch;
  });

  afterEach(() => {
    if (originalFetch) {
      globalThis.fetch = originalFetch;
    } else {
      Reflect.deleteProperty(globalThis, 'fetch');
    }
  });

  it('deletes the selected artwork and notifies the parent on success', async () => {
    mockFetch.mockResolvedValue(jsonResponse({ id: artwork.id }));
    const onDeleted = jest.fn();

    renderWithQueryClient(
      <SelectedArtwork
        artwork={artwork}
        accessToken="valid-token"
        onUnauthorized={jest.fn()}
        onDeleted={onDeleted}
      />
    );

    fireEvent.click(
      screen.getByRole('button', { name: 'Delete Blue Flowers' })
    );

    await waitFor(() => {
      expect(onDeleted).toHaveBeenCalledTimes(1);
    });
    expect(mockFetch).toHaveBeenCalledWith(
      `/api/admin/artworks/${artwork.id}`,
      expect.objectContaining({ method: 'DELETE' })
    );
  });
});
