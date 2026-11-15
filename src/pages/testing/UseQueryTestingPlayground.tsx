import { useQuery } from '@tanstack/react-query';
import Button from '../../components/ui/Button/Button';
import type { Post } from '../../types/post.types';

function UseQueryTestingPlayground() {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ['myData'],
    queryFn: async ({ signal }) => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
          signal,
        }
      );

      if (!response.ok) {
        throw new Error('Request failed');
      }

      return (await response.json()) as Post[];
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return (
      <div>
        Error: {error instanceof Error ? error.message : 'Unknown error'}
      </div>
    );
  }

  return (
    <div>
      TEST QUERY
      <Button
        onClick={() => refetch()}
        ariaLabel="retry button"
        buttonText="Retry"
        type="button"
      />
      {data &&
        data.map((element) => <div key={element.id}>{element.title}</div>)}
    </div>
  );
}

export default UseQueryTestingPlayground;
