import type { StatusType } from './auth.types';

type LoginConfirmationProps = {
  status: StatusType;
  errorMessage: string;
};

function LoginConfirmation({ status, errorMessage }: LoginConfirmationProps) {
  return (
    <div>
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
    </div>
  );
}

export default LoginConfirmation;
