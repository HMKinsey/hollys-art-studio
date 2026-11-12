import type { Dispatch, SetStateAction } from 'react';

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
      {!forgotPassword && <p>Forgot your password?</p>}
      <button
        aria-label="Reset password"
        className="bg-rose hover:bg-rose-dark rounded px-4 py-2 font-semibold text-white"
        onClick={() => setForgotPassword(true)}
        type="button"
      >
        Reset Password
      </button>
    </div>
  );
}

export default ForgotPassword;
