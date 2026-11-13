import ErrorMessage from '../shared/Messages/ErrorMessage';
import InformationMessage from '../shared/Messages/InformationMessage';
import type { StatusType } from './auth.types';
import { en } from '../../locales/en';

type LoginConfirmationProps = {
  status: StatusType;
  errorMessage: string;
};

function LoginConfirmation({ status, errorMessage }: LoginConfirmationProps) {
  return (
    <div>
      {status === 'error' && <ErrorMessage errorMessage={errorMessage} />}

      {status === 'success' && (
        <InformationMessage text={en.auth.signInSuccess} />
      )}
    </div>
  );
}

export default LoginConfirmation;
