import { useEffect, useState } from 'react';
import Button from '../../components/ui/Button/Button';
import type { Post } from '../../types/post.types';

function TestingPlayground() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Post[]>([]);
  const [badPractise, setBadPractise] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        setError(null);
        setLoading(true);

        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts',
          {
            signal: controller.signal,
          }
        );

        if (!response.ok) {
          throw new Error('Request failed');
        }

        const result: Post[] = await response.json();
        setData(result);
      } catch (caughtError) {
        if (caughtError instanceof Error && caughtError.name !== 'AbortError') {
          setError(caughtError.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    void fetchData();

    return () => controller.abort();
  }, [badPractise]);

  function handleClick() {
    setBadPractise((prev) => prev + 1);
  }

  return (
    <div>
      <p>testing playground</p>
      <Button
        ariaLabel=""
        onClick={() => handleClick()}
        type="button"
        buttonText="Retry"
      />
      {loading && <div> its loading </div>}
      {error && <div> is error </div>}
      {data &&
        data.map((element) => <div key={element.id}>{element.title}</div>)}
    </div>
  );
}

export default TestingPlayground;
