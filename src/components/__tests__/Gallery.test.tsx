import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { jest } from '@jest/globals';
import { getArtworks } from '../../api/artworks';
import type { Artwork } from '../../types/artwork';
import Gallery from '../Gallery';

jest.mock('../../api/artworks', () => ({
  getArtworks: jest.fn(),
}));

const mockGetArtworks = jest.mocked(getArtworks);

const artworks: Artwork[] = [
  {
    id: '1',
    name: 'Sunset over the sea',
    image_path: 'https://example.com/sunset.jpg',
  },
  {
    id: '2',
    name: 'Mountain landscape',
    image_path: 'https://example.com/mountain.jpg',
  },
];

function renderGallery() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false },
    },
  });

  return render(
    <QueryClientProvider client={queryClient}>
      <Gallery />
    </QueryClientProvider>
  );
}

describe('Gallery', () => {
  beforeEach(() => {
    mockGetArtworks.mockReset();
  });

  it('shows a loading state while artworks are being fetched', () => {
    mockGetArtworks.mockImplementation(() => new Promise<Artwork[]>(() => {}));

    renderGallery();

    expect(screen.getByText('Loading Spinner')).toBeInTheDocument();
  });

  it('shows an error when the artwork request fails', async () => {
    mockGetArtworks.mockRejectedValue(new Error('Network request failed'));

    renderGallery();

    expect(
      await screen.findByText('Error Message: Network request failed')
    ).toBeInTheDocument();
  });

  it('shows an empty state when no artworks are returned', async () => {
    mockGetArtworks.mockResolvedValue([]);

    renderGallery();

    expect(await screen.findByText('No results are saved')).toBeInTheDocument();
  });

  it('renders artwork returned by the query', async () => {
    mockGetArtworks.mockResolvedValue(artworks);

    renderGallery();

    expect(
      await screen.findByText('File Name: Sunset over the sea')
    ).toBeInTheDocument();
    expect(
      screen.getByText('File Name: Mountain landscape')
    ).toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: 'Sunset over the sea' })
    ).toHaveAttribute('src', 'https://example.com/sunset.jpg');
    expect(screen.getByText('Displaying 2 of 2 results')).toBeInTheDocument();
  });

  it('filters artwork by name and restores results when search is cleared', async () => {
    mockGetArtworks.mockResolvedValue(artworks);

    renderGallery();

    const searchInput = await screen.findByPlaceholderText('Filter Results...');
    fireEvent.change(searchInput, { target: { value: '  SUNSET  ' } });

    expect(
      screen.getByText('File Name: Sunset over the sea')
    ).toBeInTheDocument();
    expect(
      screen.queryByText('File Name: Mountain landscape')
    ).not.toBeInTheDocument();
    expect(screen.getByText('Displaying 1 of 2 results')).toBeInTheDocument();

    fireEvent.change(searchInput, { target: { value: '' } });

    await waitFor(() => {
      expect(
        screen.getByText('File Name: Mountain landscape')
      ).toBeInTheDocument();
    });
    expect(screen.getByText('Displaying 2 of 2 results')).toBeInTheDocument();
    expect(mockGetArtworks).toHaveBeenCalledTimes(1);
  });
});
