import React from "react";
import HomePageTopBar from "./homePageTopBar";
import "./homePageTopBar.css";
import { Route, Switch } from "react-router-dom";
import { NavLink } from "react-router-dom";

function topBar() {
    return (
        <HomePageTopBar />
    );
}

export default topBar;