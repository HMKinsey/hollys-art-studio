import type { Artwork } from '../types/artwork.types';
import { useArtworks } from '../hooks/queries/useArtworks';
import SearchBox from './shared/SearchBox';
import { useMemo, useState, type Dispatch, type SetStateAction } from 'react';
import GalleryImages from './GalleryImages';

interface GalleryProps {
  setSelectedArtwork: Dispatch<SetStateAction<Artwork | null>>;
}

function Gallery({ setSelectedArtwork }: GalleryProps) {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const normalisedSearchTerm = searchTerm.trim().toLocaleLowerCase();

  const { data: artworks = [], isLoading, isError, error } = useArtworks();

  const filteredArt: Artwork[] = useMemo(
    () =>
      artworks.filter((art) =>
        art.name.toLowerCase().includes(normalisedSearchTerm)
      ),
    [artworks, normalisedSearchTerm]
  );

  if (isError) {
    return <div>Error Message: {error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading Spinner</div>;
  }

  const headerText =
    artworks && artworks.length > 0
      ? `Displaying ${filteredArt.length} of ${artworks.length} results`
      : 'No results are saved';

  return (
    <div>
      <div className={'flex flex-col items-center'}>
        <h2>{headerText}</h2>
        <SearchBox
          searchTerm={searchTerm}
          autoFocus
          setSearchTerm={setSearchTerm}
          searchboxText="Search results: "
          placeholder="Filter Results..."
        />
      </div>
      <GalleryImages
        filteredArt={filteredArt}
        setSelectedArtwork={setSelectedArtwork}
      />
    </div>
  );
}

export default Gallery;
