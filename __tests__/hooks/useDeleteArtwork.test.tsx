import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, renderHook } from '@testing-library/react';
import type { PropsWithChildren } from 'react';
import { jest } from '@jest/globals';
import { artworksQueryKey } from '../../src/hooks/queries/artworksQueryKey';
import { useDeleteArtwork } from '../../src/hooks/mutations/useDeleteArtwork';

jest.mock('../../src/api/client', () => {
  return {
    apiUrl: jest.fn((path: string) => path),
    readApiResponse: jest.fn(async (response: Response) => response.json()),
  };
});

const mockFetch = jest.fn<typeof fetch>();
const originalFetch = globalThis.fetch;

function jsonResponse(body: unknown, status = 200): Response {
  return {
    ok: status >= 200 && status < 300,
    status,
    json: async () => body,
  } as Response;
}

function createWrapper(queryClient: QueryClient) {
  return function Wrapper({ children }: PropsWithChildren) {
    return (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
  };
}

describe('useDeleteArtwork', () => {
  beforeEach(() => {
    mockFetch.mockReset();
    globalThis.fetch = mockFetch;
  });

  afterEach(() => {
    if (originalFetch) {
      globalThis.fetch = originalFetch;
    } else {
      Reflect.deleteProperty(globalThis, 'fetch');
    }
  });

  it('deletes the artwork with its id and bearer token, then refreshes the gallery', async () => {
    mockFetch.mockResolvedValue(jsonResponse({ id: 'artwork-42' }));
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: { retry: false },
        mutations: { retry: false },
      },
    });
    const invalidateQueries = jest.spyOn(queryClient, 'invalidateQueries');
    const { result } = renderHook(() => useDeleteArtwork(jest.fn()), {
      wrapper: createWrapper(queryClient),
    });

    await act(async () => {
      await result.current.mutateAsync({
        artworkId: 'artwork-42',
        token: 'valid-token',
      });
    });

    expect(mockFetch).toHaveBeenCalledWith('/api/admin/artworks/artwork-42', {
      method: 'DELETE',
      headers: { Authorization: 'Bearer valid-token' },
    });
    expect(invalidateQueries).toHaveBeenCalledWith({
      queryKey: artworksQueryKey,
    });
  });

  it('handles an expired session and refreshes the gallery after failure', async () => {
    mockFetch.mockResolvedValue(
      jsonResponse({ error: 'Session expired.' }, 401)
    );
    const onUnauthorized = jest.fn();
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: { retry: false },
        mutations: { retry: false },
      },
    });
    const invalidateQueries = jest.spyOn(queryClient, 'invalidateQueries');
    const { result } = renderHook(() => useDeleteArtwork(onUnauthorized), {
      wrapper: createWrapper(queryClient),
    });

    await act(async () => {
      await expect(
        result.current.mutateAsync({
          artworkId: 'artwork-42',
          token: 'expired-token',
        })
      ).rejects.toThrow('Session expired.');
    });

    expect(onUnauthorized).toHaveBeenCalledTimes(1);
    expect(invalidateQueries).toHaveBeenCalledWith({
      queryKey: artworksQueryKey,
    });
  });
});
