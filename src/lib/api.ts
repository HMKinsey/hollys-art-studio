import { en } from '../locales/en';

export async function login(email: string, password: string) {
  const apiOrigin = import.meta.env.VITE_API_URL?.replace(/\/+$/, '') ?? '';
  const response = await fetch(`${apiOrigin}/api/admin/login`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error ?? en.auth.signInFailed);
  }

  return data;
}
