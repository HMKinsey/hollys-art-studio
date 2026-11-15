import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { jest } from '@jest/globals';
import type { Dispatch, SetStateAction } from 'react';
import { getArtworks } from '../../src/api/artworks.api';
import type { Artwork } from '../../src/types/artwork.types';
import Gallery from '../../src/components/Gallery';

jest.mock('../../src/api/artworks.api', () => ({
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

function renderGallery(
  setSelectedArtwork: Dispatch<SetStateAction<Artwork | null>> = jest.fn()
) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false },
    },
  });

  return render(
    <QueryClientProvider client={queryClient}>
      <Gallery setSelectedArtwork={setSelectedArtwork} />
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

  it('passes the chosen artwork to the selection handler', async () => {
    mockGetArtworks.mockResolvedValue(artworks);
    const setSelectedArtwork =
      jest.fn<Dispatch<SetStateAction<Artwork | null>>>();

    renderGallery(setSelectedArtwork);

    await screen.findByText('File Name: Sunset over the sea');
    fireEvent.click(screen.getAllByRole('button', { name: 'Edit' })[0]);

    expect(setSelectedArtwork).toHaveBeenCalledWith(artworks[0]);
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
