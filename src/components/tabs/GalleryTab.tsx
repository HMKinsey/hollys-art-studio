import { useArtworks } from '../../hooks/queries/useArtworks';
import { en } from '../../locales/en';
import { Heading } from '../shared/Heading';

export function GalleryTab() {
  const { data: artworks = [], isLoading, isError } = useArtworks();

  if (isError) {
    return (
      <div>
        `It looks like were having problems connecting you... Please check your
        internet connection!`
      </div>
    );
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="mb-3 text-center">
        <Heading>{en.gallery.heading}</Heading>
      </div>
      <div className="flex flex-col items-center gap-8">
        {artworks.map((piece) => (
          <figure
            key={piece.id}
            className="bg-frame m-0 w-full max-w-[900px] overflow-hidden rounded-3xl"
          >
            <img
              src={piece.image_path}
              alt={piece.name}
              className="block h-auto w-full object-contain"
            />
          </figure>
        ))}
      </div>
    </>
  );
}
