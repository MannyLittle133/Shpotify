import './HomePageSideBar.css';
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import  invertedLogo  from "../logos/inverted.jpg"
import whiteLogo from '../logos/shpotify_logo_login_cropped.jpg';

function HomePageSideBar() {

    return (
        <div className="homePageSideBar">

            <div className="sideBarLogo">
                <img className="officialSideLogo" src={invertedLogo} alt="sideLogo" />
            </div>

            <div className="homePageSideBar__logo">
                {/* <img className='invLogo' src={invertedLogo} alt="Shpotify logo" /> */}
            </div>
            <div className="homePageSideBar__nav">
                
                    <div className='sideHome'>
                        <NavLink to="/home" activeClassName="active">
                            <i className="home"></i>
                            <span>Home</span>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/search" activeClassName="active">
                            <i className="search"></i>
                            <span>Search</span>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/collection/playlists" activeClassName="active">
                            <i className="music-note"></i>
                            <span>Your Library</span>
                        </NavLink>
                    </div>

                    <div>
                        <NavLink to="/collection/playlists" activeClassName="active">
                            <i className="playlist"></i>
                            <span>Playlists</span>
                        </NavLink>
                    </div>
                
                    <div>
                        <NavLink to="/collection/playlists" activeClassName="active">
                            <i className="playlist"></i>
                            <span>Create Playlist</span>
                        </NavLink>
                    </div>
            </div>
        </div>
    );
}




export default HomePageSideBar;