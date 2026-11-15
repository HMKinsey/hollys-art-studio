import { Link } from 'react-router-dom';
import Gallery from '../Gallery';
import UploadImage from '../UploadImage';

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
      <Link to="/testing">Testing playground</Link>
      <UploadImage accessToken={accessToken} onUnauthorized={onUnauthorized} />
      <Gallery />
      Lets get some images
    </div>
  );
}
export default CongigurationPage;
