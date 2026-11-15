import { useState } from 'react';
import ForgotPassword from './ForgotPassword';
import LoginForm from './LoginForm';
import ResetPassword from './ResetPassword';
import CongigurationPage from './ConfigurationPage';

function AuthLogin() {
  const [forgotPassword, setForgotPassword] = useState(false);
  const [accessToken, setAccessToken] = useState(
    () => localStorage.getItem('studioAdminToken') ?? ''
  );

  function handleLogin(token: string) {
    localStorage.setItem('studioAdminToken', token);
    setAccessToken(token);
  }

  function handleLogout() {
    localStorage.removeItem('studioAdminToken');
    setAccessToken('');
  }

  return (
    <div>
      {accessToken ? (
        <>
          <button type="button" onClick={handleLogout}>
            Sign out
          </button>
          <CongigurationPage
            accessToken={accessToken}
            onUnauthorized={handleLogout}
          />
        </>
      ) : (
        <>
          {forgotPassword ? (
            <ResetPassword />
          ) : (
            <LoginForm onLogin={handleLogin} />
          )}
          <ForgotPassword
            forgotPassword={forgotPassword}
            setForgotPassword={setForgotPassword}
          />
        </>
      )}
    </div>
  );
}

export default AuthLogin;
