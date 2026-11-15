import { en } from '../locales/en';

export class ApiError extends Error {
  constructor(
    message: string,
    public readonly status: number
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export function apiUrl(path: string) {
  const apiOrigin = import.meta.env.VITE_API_URL?.replace(/\/+$/, '') ?? '';
  const apiPath = path.startsWith('/') ? path : `/${path}`;

  return `${apiOrigin}${apiPath}`;
}

export async function readApiResponse<T>(response: Response): Promise<T> {
  const contentType = response.headers.get('content-type') ?? '';
  if (!/(?:application\/json|application\/[^;]+\+json)/i.test(contentType)) {
    throw new ApiError(
      `The API returned a non-JSON response (HTTP ${response.status}).`,
      response.status
    );
  }

  try {
    return (await response.json()) as T;
  } catch {
    throw new ApiError(
      `The API returned invalid JSON (HTTP ${response.status}).`,
      response.status
    );
  }
}

export async function login(email: string, password: string) {
  const response = await fetch(apiUrl('/api/admin/login'), {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  const data = await readApiResponse<{ token?: string; error?: string }>(
    response
  );

  if (!response.ok) {
    throw new Error(data.error ?? en.auth.signInFailed);
  }

  return data;
}
