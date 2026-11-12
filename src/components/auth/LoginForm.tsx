import { FormEvent, useState } from 'react';
import { login } from '../../lib/api';
import LoginConfirmation from './LoginConfirmation';
import { StatusType } from './auth.types';
import InputField from '../shared/Forms/InputField';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState<StatusType>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const data = await login(email, password);

      if (typeof data.token !== 'string') {
        throw new Error('The server did not return an authentication token.');
      }

      localStorage.setItem('studioAdminToken', data.token);
      setStatus('success');
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : 'Sign in failed. Please try again.';

      setErrorMessage(message);
      setStatus('error');
    }
  }
  return (
    <form
      className="bg-paper mx-auto flex w-full max-w-sm flex-col gap-4 rounded-lg p-6 shadow"
      onSubmit={handleSubmit}
    >
      <h1 className="text-2xl font-semibold">Admin sign in</h1>

      <InputField
        autoComplete="username"
        disabled={status === 'submitting'}
        id="admin-email"
        label="Email"
        onChange={setEmail}
        required
        type="email"
        value={email}
      />

      <InputField
        autoComplete="current-password"
        disabled={status === 'submitting'}
        id="admin-password"
        label="Password"
        onChange={setPassword}
        required
        type="password"
        value={password}
      />

      <LoginConfirmation errorMessage={errorMessage} status={status} />

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
