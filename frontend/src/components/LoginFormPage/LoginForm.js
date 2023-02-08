import React from 'react';
import { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import whiteLogo from '../logos/shpotify_logo_login_cropped.jpg';

const LoginForm = () => {

  const history = useHistory();

  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        let data;
        try {
          // .clone() essentially allows you to read the response body twice
          data = await res.clone().json();
        } catch {
          data = await res.text(); // Will hit this case if the server is down
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
  }

  

  const handleDemoUserLoginForm = (e) => {
    setCredential('musicLover@gmail.com');
    setPassword('123456');
  }

  return (

    // <div className='loginPageLogo'>
    //   <LoginLogo />
    // </div>

    <div className='loginDiv'>
    <div className="logo1">
      <img className="officialLoginLogo" src={whiteLogo} alt="LogLogo" />
    </div>
    <form className='loginForm' onSubmit={handleSubmit}>
      <ul>
        {errors.map(error => <li key={error}>{error}</li>)}
      </ul>

      <h1 className="loginFormHeader">To continue, log in to Shpotify.</h1>

      {/* <div className='aboutMeLinksDiv'> */}
        {/* <button className="linkdin" type="submit">Linkdin</button> */}
        {/* <br/> */}
        {/* <button className="gitHub" type="submit">Github</button> */}
        {/* <button onClick={handleDemoUserLoginForm} className="demoUserButton" type="submit">Demo User</button> */}
      {/* </div> */}

      <label id="loginLabel">
        Email Address or Username
      </label>
      <input
        id="loginInput"
        type="text"
        value={credential}
        onChange={(e) => setCredential(e.target.value)}
        required
        placeholder='Email Address or Username'
      />

      <label id="loginLabel">
        Password
      </label>
      <input
        id="loginInput"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        placeholder='Password'
      />

      <div className='loginButtonDiv'>
        <button className="loginButton" type="submit">Log In</button>
        {/* <button onClick={handleDemoUserLoginForm} className="demoUserButton" type="submit">Demo User</button> */}
      </div>
      <div className='demoUserButtonDiv'>
        <button onClick={handleDemoUserLoginForm} className="demoUserButton" type="submit">Demo User</button>
      </div>
      {/* <p className='space'>im just here to make space ;)</p> */}

    </form>
    <p className='noAccount'>Don't have an account?</p>
    <button onClick={() => history.push('/signup')} className='signupLinkButton'>SIGN UP FOR SHPOTIFY</button>
    </div>
  )

}

export default LoginForm;