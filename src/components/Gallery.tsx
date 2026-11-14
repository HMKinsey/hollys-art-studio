import { useQuery } from '@tanstack/react-query';
import { getArtworks } from '../api/artworks';

function Gallery() {
  const {
    data: artworks = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['artworks'],
    queryFn: getArtworks,
  });

  if (isError) {
    return <div>Error Message: {error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading Spinner</div>;
  }

  return (
    <div>
      {artworks.map((art) => (
        <div key={art.id} id={art.id}>
          <img src={art.image_path} alt={art.name} style={{ width: '100%' }} />
        </div>
      ))}
    </div>
  );
}

export default Gallery;
