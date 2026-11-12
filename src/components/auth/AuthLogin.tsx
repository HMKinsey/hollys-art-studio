import { useState } from 'react';
import ForgotPassword from './ForgotPassword';
import LoginForm from './LoginForm';

function AuthLogin() {
  const [forgotPassword, setForgotPassword] = useState(false);

  return (
    <div>
    <LoginForm />
    <ForgotPassword
        forgotPassword={forgotPassword}
        setForgotPassword={setForgotPassword}
      />
    </div>
  );
}

export default AuthLogin;
