import { useDeleteArtwork } from '../hooks/mutations/useDeleteArtwork';
import type { Artwork } from '../types';
import Button from './ui/Button/Button';
import ErrorMessage from './shared/Messages/ErrorMessage';

interface SelectedArtworkProps {
  artwork: Artwork | null;
  accessToken: string;
  onUnauthorized: () => void;
  onDeleted: () => void;
}

function SelectedArtwork({
  artwork,
  accessToken,
  onUnauthorized,
  onDeleted,
}: SelectedArtworkProps) {
  const mutation = useDeleteArtwork(onUnauthorized);

  if (!artwork) {
    return (
      <>
        {mutation.isError && (
          <ErrorMessage errorMessage={mutation.error.message} />
        )}
        {mutation.data?.warning && <p role="status">{mutation.data.warning}</p>}
        <div>Select a piece of art to configure</div>
      </>
    );
  }

  return (
    <div>
      <h1>Selected artwork: </h1>
      <h2>{artwork.name}</h2>
      <img src={artwork.image_path} alt={artwork.name} className="h-72" />
      <Button
        buttonText="Delete"
        ariaLabel={`Delete ${artwork.name}`}
        disabled={mutation.isPending}
        type="button"
        onClick={() =>
          mutation.mutate(
            { artworkId: artwork.id, token: accessToken },
            { onSuccess: onDeleted }
          )
        }
      />
      {mutation.isPending && <p role="status">Deleting artwork…</p>}
      {mutation.isError && (
        <ErrorMessage errorMessage={mutation.error.message} />
      )}
      {mutation.data?.warning && <p role="status">{mutation.data.warning}</p>}
    </div>
  );
}

export default SelectedArtwork;
