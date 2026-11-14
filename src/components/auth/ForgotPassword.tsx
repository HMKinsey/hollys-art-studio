import type { Dispatch, SetStateAction } from 'react';
import { en } from '../../locales/en';
import Button from '../ui/Button/Button';

type ForgotPasswordProps = {
  forgotPassword: boolean;
  setForgotPassword: Dispatch<SetStateAction<boolean>>;
};

function ForgotPassword({
  forgotPassword,
  setForgotPassword,
}: ForgotPasswordProps) {
  return (
    <Button
      aria-label={en.auth.resetPasswordButtonLabel}
      onClick={() => setForgotPassword(!forgotPassword)}
      type="button"
      buttonText={
        !forgotPassword ? en.auth.resetPasswordButton : en.auth.returnToLogin
      }
      ariaLabel={''}
    />
  );
}

export default ForgotPassword;
