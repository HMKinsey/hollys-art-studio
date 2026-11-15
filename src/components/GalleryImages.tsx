import type { Dispatch, SetStateAction } from 'react';
import type { Artwork } from '../types/artwork.types';
import Button from './ui/Button/Button';

interface GalleryImagesProps {
  filteredArt: Artwork[];
  setSelectedArtwork: Dispatch<SetStateAction<Artwork | null>>;
}

function GalleryImages({
  filteredArt,
  setSelectedArtwork,
}: GalleryImagesProps) {
  return (
    <div className={'flex flex-wrap justify-center gap-6'}>
      {filteredArt.map((art) => (
        <div key={art.id} id={art.id}>
          <h3>{`File Name: ${art.name}`}</h3>
          <img src={art.image_path} alt={art.name} className={'h-72'} />
          <Button
            id={art.id}
            buttonText={'Edit'}
            aria-label={'Edit'}
            onClick={() => setSelectedArtwork(art)}
          />
        </div>
      ))}
    </div>
  );
}

export default GalleryImages;
