import { Link } from 'react-router-dom';
import Gallery from '../Gallery';
import UploadImage from '../UploadImage';
import { buttonVariants } from '../ui/Button/buttonVariants';

interface ConfigurationPageProps {
  accessToken: string;
  onUnauthorized: () => void;
}

function CongigurationPage({
  accessToken,
  onUnauthorized,
}: ConfigurationPageProps) {
  return (
    <div>
      <div className={'mr-8 flex justify-end'}>
        <Link to="/testing" className={buttonVariants({ size: 'md' })}>
          Testing playground
        </Link>
      </div>
      <UploadImage accessToken={accessToken} onUnauthorized={onUnauthorized} />
      <Gallery />
    </div>
  );
}
export default CongigurationPage;
