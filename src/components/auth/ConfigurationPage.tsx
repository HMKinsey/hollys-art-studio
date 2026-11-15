import { Link } from 'react-router-dom';
import Gallery from '../Gallery';
import UploadImage from '../UploadImage';
import { buttonVariants } from '../ui/Button/buttonVariants';
import SelectedArtwork from '../SelectedArtwork';
import { Artwork } from '../../types';
import { useState } from 'react';

interface ConfigurationPageProps {
  accessToken: string;
  onUnauthorized: () => void;
}

function CongigurationPage({
  accessToken,
  onUnauthorized,
}: ConfigurationPageProps) {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  return (
    <div>
      <div className={'mr-8 flex justify-end'}>
        <Link to="/testing" className={buttonVariants({ size: 'md' })}>
          Testing playground
        </Link>
      </div>
      <SelectedArtwork
        artwork={selectedArtwork}
        accessToken={accessToken}
        onUnauthorized={onUnauthorized}
        onDeleted={() => setSelectedArtwork(null)}
      />
      <UploadImage accessToken={accessToken} onUnauthorized={onUnauthorized} />
      <Gallery setSelectedArtwork={setSelectedArtwork} />
    </div>
  );
}
export default CongigurationPage;
