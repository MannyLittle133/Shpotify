import React from "react";
import { Route, Switch } from "react-router-dom";
import "./homePageTopBar.css";
import { NavLink } from "react-router-dom";

const HomePageTopBar = () => {

    return (
        <div className="topBar">
            <div className="topBar__left">
                <NavLink to="/home" exact={true} activeClassName="active">
                    <img className="topBar__logo" src="https://i.imgur.com/1Q1Z1ZQ.png" alt="logo" />
                </NavLink>
            </div>
            {/* <div className="topBar__center"> */}
                {/* <div className="searchBar"> */}
                    {/* <input type="text" placeholder="Search for Artists, Songs, or Podcasts" /> */}
                    {/* <i className="fas fa-search"></i> */}
                {/* </div> */}
            {/* </div> */}
            <div className="topBar__right">
                <div className="topBar__right__icons">
                    <i className="fas fa-user"></i>
                    <i className="fas fa-cog"></i>
                </div>
            </div>
        </div>
    );
}

export default HomePageTopBar;