import { useQuery } from '@tanstack/react-query';
import { getArtworks } from '../api/artworks';
import type { Artwork } from '../types/artwork';
import SearchBox from './shared/SearchBox';
import { useMemo, useState } from 'react';

function Gallery() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const normalisedSearchTerm = searchTerm.trim().toLocaleLowerCase();

  const {
    data: artworks = [],
    isLoading,
    isError,
    error,
  } = useQuery<Artwork[], Error>({
    queryKey: ['artworks'],
    queryFn: getArtworks,
  });

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

  const FilterArtworks = 'pass state to searchbox..';

  return (
    <div>
      <h2>
        {artworks && artworks.length > 0
          ? `Displaying ${filteredArt.length} of ${artworks.length} results`
          : 'No results are saved'}
      </h2>

      <SearchBox
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchboxText="Search results: "
        placeholder="Filter Results..."
      />
      {FilterArtworks}
      {filteredArt.map((art) => (
        <div key={art.id} id={art.id}>
          <h3>{`File Name: ${art.name}`}</h3>
          <img src={art.image_path} alt={art.name} className={'w-72'} />
        </div>
      ))}
    </div>
  );
}

export default Gallery;
