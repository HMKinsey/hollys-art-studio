import type { Artwork } from '../types/artwork.types';
import { useArtworks } from '../hooks/queries/useArtworks';
import SearchBox from './shared/SearchBox';
import { useMemo, useState } from 'react';

function Gallery() {
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
  return (
    <div>
      <div className={'flex flex-col items-center'}>
        <h2>
          {artworks && artworks.length > 0
            ? `Displaying ${filteredArt.length} of ${artworks.length} results`
            : 'No results are saved'}
        </h2>

        <SearchBox
          searchTerm={searchTerm}
          autoFocus
          setSearchTerm={setSearchTerm}
          searchboxText="Search results: "
          placeholder="Filter Results..."
        />
      </div>
      <div className={'flex flex-wrap justify-center gap-6'}>
        {filteredArt.map((art) => (
          <div key={art.id} id={art.id}>
            <h3>{`File Name: ${art.name}`}</h3>
            <img src={art.image_path} alt={art.name} className={'h-72'} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
