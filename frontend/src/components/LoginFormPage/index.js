
import React from 'react';
import './LoginForm.css';
import LoginLogo from '../logos';
import LoginForm from './LoginForm';

function LoginFormPage() {

  return (
    // <div className="shpotifyLogo">
      
    // </div>
    <div className="loginPage">
        <div className="logoImg">
        {/* <LoginLogo /> */}
      </div>  
      <LoginForm />
    </div>
  );
}

export default LoginFormPage;