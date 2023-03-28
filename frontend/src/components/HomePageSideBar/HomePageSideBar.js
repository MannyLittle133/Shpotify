import './HomePageSideBar.css';
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import  invertedLogo  from "../logos/inverted.jpg"
import whiteLogo from '../logos/shpotify_logo_login_cropped.jpg';

function HomePageSideBar() {

    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <div className='sideBarPlaylists'>
                <NavLink id='sideBarPlaylistsButton' exact to="/playlists/create"><i class="fa-regular fa-square-plus"></i><span style={{marginLeft: '15px'}}>Create Playlist</span></NavLink>
            </div>
        );
    } else {
        sessionLinks = (
            <div className='sideBarPlaylists'>
                <NavLink id='sideBarPlaylistsButton' exact to="/login"><i class="fa-regular fa-square-plus"></i><span style={{marginLeft: '15px'}}>Create Playlist</span></NavLink>
            </div>
        )
    }

    return (
        <div className="homePageSideBarBody">
    
            <div className="sideBarLogo">
                <img className="officialSideLogo" src={invertedLogo} alt="sideLogo" />
            </div>

            <div className="homePageSideBar__nav">
                
                    <div className='sideHome'>
                        <NavLink to="/" activeClassName="active">
                            <i className="home"></i>
                            <i className="fa-solid fa-house"></i><span style={{marginLeft: '15px'}}>Home</span>
                        </NavLink>
                    </div>
                    {/* <div>
                        <NavLink to="/search" activeClassName="active">
                            <i className="search"></i>
                            <i className= "fa-solid fa-magnifying-glass"></i><span style={{marginLeft: '15px'}}>Search</span>
                        </NavLink>
                    </div> */}
                    <div>
                        <NavLink to="/collection/playlists" activeClassName="active">
                            <i className="music-note"></i>
                            <i class="fa-regular fa-bookmark"></i><span style={{marginLeft: '15px'}}>Your Library</span>
                        </NavLink>
                    </div>

                    <div>
                        <NavLink to="/playlists" activeClassName="active">
                            <i className="playlist"></i>
                            <i class="fa-regular fa-square-plus"></i><span style={{marginLeft: '15px'}}>Create Playlist</span>
                        </NavLink>
                    </div>
                
                    <div>
                        <NavLink to="/collection/playlists" activeClassName="active">
                            <i className="playlist"></i>
                            {/* <span>Create Playlist</span> */}
                        </NavLink>
                    </div>
            </div>
        </div>
    );
}




export default HomePageSideBar;