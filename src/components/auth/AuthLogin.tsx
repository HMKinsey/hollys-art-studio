import { useState } from 'react';
import ForgotPassword from './ForgotPassword';
import LoginForm from './LoginForm';
import ResetPassword from './ResetPassword';
import CongigurationPage from './ConfigurationPage';

function AuthLogin() {
  const [forgotPassword, setForgotPassword] = useState(false);

  return (
    <div>
    {forgotPassword ? < ResetPassword /> :<LoginForm />}
    <ForgotPassword
        forgotPassword={forgotPassword}
        setForgotPassword={setForgotPassword}
      />
      < CongigurationPage />
    </div>
  );
}

export default AuthLogin;
