import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { jest } from '@jest/globals';
import { apiUrl } from '../../src/api/client';
import type { Artwork } from '../../src/types/artwork.types';
import UploadImage from '../../src/components/UploadImage';

jest.mock('../../src/api/client', () => ({
  apiUrl: jest.fn((path: string) => path),
}));

const mockApiUrl = jest.mocked(apiUrl);
const mockFetch = jest.fn<typeof fetch>();

const uploadedArtwork: Artwork = {
  id: '42',
  name: 'Blue Flowers',
  image_path: 'https://example.com/blue-flowers.jpg',
};

function renderUploadImage(onUnauthorized = jest.fn()) {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false }, mutations: { retry: false } },
  });

  return {
    onUnauthorized,
    queryClient,
    ...render(
      <QueryClientProvider client={queryClient}>
        <UploadImage
          accessToken="valid-token"
          onUnauthorized={onUnauthorized}
        />
      </QueryClientProvider>
    ),
  };
}

function jsonResponse(body: unknown, status = 201): Response {
  return {
    ok: status >= 200 && status < 300,
    status,
    json: async () => body,
  } as Response;
}

describe('UploadImage', () => {
  beforeEach(() => {
    mockApiUrl.mockClear();
    mockFetch.mockReset();
    globalThis.fetch = mockFetch;
  });

  it('uploads the selected file and name with the session token', async () => {
    mockFetch.mockResolvedValue(jsonResponse(uploadedArtwork));
    const { queryClient } = renderUploadImage();
    const invalidateQueries = jest.spyOn(queryClient, 'invalidateQueries');
    const file = new File(['image data'], 'blue-flowers.png', {
      type: 'image/png',
    });

    fireEvent.change(screen.getByLabelText('Artwork name'), {
      target: { value: 'Blue Flowers' },
    });
    const fileInput = screen.getByLabelText('Image') as HTMLInputElement;
    fireEvent.change(fileInput, {
      target: { files: [file] },
    });
    expect(fileInput.files?.[0]).toBe(file);
    expect(
      screen.getByRole('button', { name: 'Upload artwork' })
    ).toBeEnabled();
    fireEvent.submit(
      screen.getByRole('button', { name: 'Upload artwork' }).closest('form')!
    );

    await waitFor(() => {
      expect(
        screen.getByText('Artwork uploaded successfully.')
      ).toBeInTheDocument();
    });

    expect(mockApiUrl).toHaveBeenCalledWith('/api/admin/artworks');
    expect(mockFetch).toHaveBeenCalledTimes(1);
    const [url, options] = mockFetch.mock.calls[0];
    expect(url).toBe('/api/admin/artworks');
    expect(options?.method).toBe('POST');
    expect(options?.headers).toEqual({ Authorization: 'Bearer valid-token' });
    expect(options?.body).toBeInstanceOf(FormData);
    expect((options?.body as FormData).get('name')).toBe('Blue Flowers');
    expect((options?.body as FormData).get('file')).toBe(file);
    expect(invalidateQueries).toHaveBeenCalledWith({ queryKey: ['artworks'] });
  });

  it('shows a server error message when the upload is rejected', async () => {
    mockFetch.mockResolvedValue(
      jsonResponse(
        { error: 'You do not have permission to add a new image' },
        403
      )
    );

    renderUploadImage();
    fireEvent.change(screen.getByLabelText('Artwork name'), {
      target: { value: 'Blue Flowers' },
    });
    fireEvent.change(screen.getByLabelText('Image'), {
      target: {
        files: [
          new File(['image data'], 'blue-flowers.png', { type: 'image/png' }),
        ],
      },
    });
    fireEvent.submit(
      screen.getByRole('button', { name: 'Upload artwork' }).closest('form')!
    );

    expect(
      await screen.findByText('You do not have permission to add a new image')
    ).toBeInTheDocument();
  });

  it('shows a useful error when the upload request cannot reach the server', async () => {
    mockFetch.mockRejectedValue(new TypeError('Failed to fetch'));

    renderUploadImage();
    fireEvent.change(screen.getByLabelText('Artwork name'), {
      target: { value: 'Blue Flowers' },
    });
    fireEvent.change(screen.getByLabelText('Image'), {
      target: {
        files: [
          new File(['image data'], 'blue-flowers.png', { type: 'image/png' }),
        ],
      },
    });
    fireEvent.submit(
      screen.getByRole('button', { name: 'Upload artwork' }).closest('form')!
    );

    expect(await screen.findByRole('alert')).toHaveTextContent(
      'Failed to fetch'
    );
  });

  it('signs the user out when the API reports an expired session', async () => {
    mockFetch.mockResolvedValue(
      jsonResponse({ error: 'Your session is invalid or has expired.' }, 401)
    );
    const onUnauthorized = jest.fn();

    renderUploadImage(onUnauthorized);
    fireEvent.change(screen.getByLabelText('Artwork name'), {
      target: { value: 'Blue Flowers' },
    });
    fireEvent.change(screen.getByLabelText('Image'), {
      target: {
        files: [
          new File(['image data'], 'blue-flowers.png', { type: 'image/png' }),
        ],
      },
    });
    fireEvent.submit(
      screen.getByRole('button', { name: 'Upload artwork' }).closest('form')!
    );

    await waitFor(() => {
      expect(onUnauthorized).toHaveBeenCalledTimes(1);
    });
    expect(
      await screen.findByText('Your session is invalid or has expired.')
    ).toBeInTheDocument();
  });
});
