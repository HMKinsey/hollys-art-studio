import type { Dispatch, SetStateAction } from 'react';
import { en } from '../../locales/en';

type ForgotPasswordProps = {
  forgotPassword: boolean;
  setForgotPassword: Dispatch<SetStateAction<boolean>>;
};

function ForgotPassword({
  forgotPassword,
  setForgotPassword,
}: ForgotPasswordProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      {!forgotPassword && <p>{en.auth.forgotPasswordPrompt}</p>}
      <button
        aria-label={en.auth.resetPasswordButtonLabel}
        className="bg-rose hover:bg-rose-dark rounded px-4 py-2 font-semibold text-white"
        onClick={() => setForgotPassword(true)}
        type="button"
      >
        {en.auth.resetPasswordButton}
      </button>
    </div>
  );
}

export default ForgotPassword;
