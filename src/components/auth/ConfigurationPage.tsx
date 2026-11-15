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
      <UploadImage accessToken={accessToken} onUnauthorized={onUnauthorized} />
      <Gallery />
      Lets get some images
    </div>
  );
}
export default CongigurationPage;
