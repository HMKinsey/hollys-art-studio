import { FormEvent, useState } from 'react';
import { login } from '../../lib/api';
import LoginConfirmation from './LoginConfirmation';
import { StatusType } from './auth.types';
import InputField from '../ui/Input/Input';
import { en } from '../../locales/en';

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
        throw new Error(en.auth.missingAuthenticationToken);
      }

      localStorage.setItem('studioAdminToken', data.token);
      setStatus('success');
    } catch (error) {
      const message =
        error instanceof Error ? error.message : en.auth.signInFailed;

      setErrorMessage(message);
      setStatus('error');
    }
  }
  return (
    <form
      className="bg-paper mx-auto flex w-full max-w-sm flex-col gap-4 rounded-lg p-6 shadow"
      onSubmit={handleSubmit}
    >
      <h1 className="text-2xl font-semibold">{en.auth.adminSignInHeading}</h1>

      <InputField
        autoComplete="username"
        disabled={status === 'submitting'}
        id="admin-email"
        label={en.auth.emailLabel}
        onChange={setEmail}
        required
        type="email"
        value={email}
      />

      <InputField
        autoComplete="current-password"
        disabled={status === 'submitting'}
        id="admin-password"
        label={en.auth.passwordLabel}
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
        {status === 'submitting'
          ? en.auth.signingInButton
          : en.auth.signInButton}
      </button>
    </form>
  );
}

export default LoginForm;
