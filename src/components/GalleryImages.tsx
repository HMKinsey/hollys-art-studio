import { Artwork } from '../types/artwork.types';

function GalleryImages(filteredArt: Artwork[]) {
  return (
    <div className={'flex flex-wrap justify-center gap-6'}>
      {filteredArt.map((art) => (
        <div key={art.id} id={art.id}>
          <h3>{`File Name: ${art.name}`}</h3>
          <img src={art.image_path} alt={art.name} className={'h-72'} />
        </div>
      ))}
    </div>
  );
}

export default GalleryImages;
