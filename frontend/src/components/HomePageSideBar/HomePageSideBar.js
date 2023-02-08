import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import whiteLogo from '../logos/shpotify_logo_login_cropped.jpg';

const HomePageSideBar = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    return (
        <nav className="sideBar">
            <div className="sideBarLogo">
                <img className="officialSideLogo" src={whiteLogo} alt="sideLogo" />
            </div>
        </nav>
    )

}