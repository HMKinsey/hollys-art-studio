import { useState, type FormEvent } from 'react';
import { useUploadArtwork } from '../hooks/mutations/useUploadArtwork';
import ErrorMessage from './shared/Messages/ErrorMessage';
import InformationMessage from './shared/Messages/InformationMessage';

interface UploadImageProps {
  accessToken: string;
  onUnauthorized: () => void;
}

function UploadImage({ accessToken, onUnauthorized }: UploadImageProps) {
  const [name, setName] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const mutation = useUploadArtwork(onUnauthorized);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!file) {
      return;
    }

    mutation.mutate({ name, file, token: accessToken });
  }

  return (
    <form
      className="mx-auto flex w-full max-w-sm flex-col gap-4 p-6"
      onSubmit={handleSubmit}
    >
      <h2 className="text-xl font-semibold">Add artwork</h2>
      <label className="flex flex-col gap-1" htmlFor="artwork-name">
        Artwork name
        <input
          autoComplete="off"
          className="border-line rounded border px-3 py-2"
          id="artwork-name"
          onChange={(event) => setName(event.target.value)}
          required
          value={name}
        />
      </label>
      <label className="flex flex-col gap-1" htmlFor="artwork-file">
        Image
        <input
          accept="image/jpeg,image/png,image/webp,image/gif,image/heic,image/heif"
          className="border-line rounded border px-3 py-2"
          disabled={mutation.isPending}
          id="artwork-file"
          onChange={(event) => setFile(event.target.files?.[0] ?? null)}
          required
          type="file"
        />
      </label>
      {mutation.isError && (
        <ErrorMessage errorMessage={mutation.error.message} />
      )}
      {mutation.isSuccess && (
        <InformationMessage text="Artwork uploaded successfully." />
      )}
      <button
        className="bg-rose hover:bg-rose-dark rounded px-4 py-2 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60"
        disabled={mutation.isPending || !file}
        type="submit"
      >
        {mutation.isPending ? 'Uploading…' : 'Upload artwork'}
      </button>
    </form>
  );
}

export default UploadImage;
