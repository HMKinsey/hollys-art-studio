import { useState, type FormEvent } from 'react';

const apiBaseUrl = import.meta.env.VITE_API_URL?.replace(/\/$/, '') ?? '';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState<
    'idle' | 'submitting' | 'error' | 'success'
  >('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch(`${apiBaseUrl}/api/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data: { error?: unknown; token?: unknown } = await response.json();

      if (!response.ok) {
        throw new Error(
          typeof data.error === 'string' ? data.error : 'Authentication failed.'
        );
      }

      if (typeof data.token !== 'string') {
        throw new Error('The server did not return an authentication token.');
      }

      localStorage.setItem('studioAdminToken', data.token);
      setStatus('success');
    } catch (error: unknown) {
      setStatus('error');
      setErrorMessage(
        error instanceof Error ? error.message : 'Failed to authenticate.'
      );
    }
  }

  return (
    <form
      className="bg-paper mx-auto flex w-full max-w-sm flex-col gap-4 rounded-lg p-6 shadow"
      onSubmit={handleSubmit}
    >
      <h1 className="text-2xl font-semibold">Admin sign in</h1>

      <label className="flex flex-col gap-1" htmlFor="admin-email">
        Email
        <input
          autoComplete="username"
          className="border-line rounded border px-3 py-2"
          disabled={status === 'submitting'}
          id="admin-email"
          onChange={(event) => setEmail(event.target.value)}
          required
          type="email"
          value={email}
        />
      </label>

      <label className="flex flex-col gap-1" htmlFor="admin-password">
        Password
        <input
          autoComplete="current-password"
          className="border-line rounded border px-3 py-2"
          disabled={status === 'submitting'}
          id="admin-password"
          onChange={(event) => setPassword(event.target.value)}
          required
          type="password"
          value={password}
        />
      </label>

      {status === 'error' && (
        <p className="text-sm text-red-700" role="alert">
          {errorMessage}
        </p>
      )}

      {status === 'success' && (
        <p className="text-sm" role="status">
          Sign in successful.
        </p>
      )}

      <button
        className="bg-rose hover:bg-rose-dark rounded px-4 py-2 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60"
        disabled={status === 'submitting'}
        type="submit"
      >
        {status === 'submitting' ? 'Signing in…' : 'Sign in'}
      </button>
    </form>
  );
}

export default LoginForm;
