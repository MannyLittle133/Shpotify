import React from "react";
import { Route, Switch } from "react-router-dom";
import "./homePageTopBar.css";
import { NavLink } from "react-router-dom";
import { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { logout } from "../../store/session";

const HomePageTopBar = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(logout());

        return dispatch(sessionActions.logout());
    }

    return (
        <div className="topBar">
            <div className='demoUserButtonDiv'>
        <button onClick={handleSubmit} className="logOutButton" type="logout">Log Out</button>
            </div>

            <div>
                {/* log out button here */}

            </div>
            <div className="topBar__left">
                <NavLink to="/home" exact={true} activeClassName="active">
                    {/* <img className="topBar__logo" src="https://i.imgur.com/1Q1Z1ZQ.png" alt="logo" /> */}
                </NavLink>
            </div>
            {/* <div className="topBar__center">
                <div className="searchBar">
                    <input type="text" placeholder="Search for Artists, Songs, or Podcasts" />
                    <i className="fas fa-search"></i>
                </div>
            </div> */}
            <div className="topBar__right"> 
                <div className="topBar__right__icons">
                    {/* <i className="fas fa-user"></i> */}
                    {/* <i className="fas fa-cog"></i> */}
                </div>
            </div> 
        </div>
    );
}

export default HomePageTopBar;