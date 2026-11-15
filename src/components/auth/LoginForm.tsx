import { useState, type FormEvent } from 'react';
import LoginConfirmation from './LoginConfirmation';
import type { StatusType } from '../../types/auth.types';
import InputField from '../ui/Input/Input';
import { en } from '../../locales/en';
import Form from '../ui/Form/Form';
import { useLogin } from '../../hooks/mutations/useLogin';

interface LoginFormProps {
  onLogin: (token: string) => void;
}

function LoginForm({ onLogin }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginMutation = useLogin();
  const status: StatusType =
    loginMutation.status === 'pending' ? 'submitting' : loginMutation.status;

  const errorMessage = loginMutation.error?.message ?? '';

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    loginMutation.mutate(
      { email, password },
      { onSuccess: (token) => onLogin(token) }
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h1 className="text-2xl font-semibold">{en.auth.adminSignInHeading}</h1>

      <InputField
        autoComplete="username"
        disabled={loginMutation.isPending}
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
    </Form>
  );
}

export default LoginForm;
