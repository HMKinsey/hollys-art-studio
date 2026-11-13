import { useState } from 'react';
import ForgotPassword from './ForgotPassword';
import LoginForm from './LoginForm';
import ResetPassword from './ResetPassword';

function AuthLogin() {
  const [forgotPassword, setForgotPassword] = useState(false);

  return (
    <div>
    {forgotPassword ? < ResetPassword /> :<LoginForm />}
    <ForgotPassword
        forgotPassword={forgotPassword}
        setForgotPassword={setForgotPassword}
      />
    </div>
  );
}

export default AuthLogin;
