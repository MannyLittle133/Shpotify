import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import { useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else if (location.pathname === '/signup' || location.pathname === '/login') {
    return null
  } else {
    sessionLinks = (
      <>
        <div className='navTop'>
          <NavLink className='navSignup' to="/signup">Sign Up</NavLink>
          <NavLink className='navLogin' to="/login">Log In</NavLink>
        </div>
      </>
    );
  }

  return (
    <div className='pro'>
      <ul className='userButton'>
        <li >
          {sessionLinks}
        </li>
      </ul>
    </div>
  );
}

export default Navigation;