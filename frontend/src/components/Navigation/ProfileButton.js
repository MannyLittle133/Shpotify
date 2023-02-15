import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import "./Navigation.css"

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const [caretClass, setCaretClass] = useState('fa-sharp fa-solid fa-caret-down')

  const profileButtonClick = () => {
    openMenu();
    changeCaret();
  }

  const changeCaret = () => {
    caretClass === 'fa-sharp fa-solid fa-caret-down' ? 
    setCaretClass('fa-sharp fa-solid fa-caret-up') :
    setCaretClass('fa-sharp fa-solid fa-caret-down')
  }
  
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
    <div className='loggedInTopBar'>
      <button onClick={openMenu}>
        <div className='dropDown'>
          <i className="fa-solid fa-user-circle" />
        </div>
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li>
            <button className="profile-dropdown" onClick={logout}>Log Out</button>
          </li>
        </ul>
      )}
    </div>
  </>
  );
}

export default ProfileButton;