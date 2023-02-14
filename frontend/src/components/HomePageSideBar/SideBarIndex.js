import React from "react";
import Body from "../HomePageBody/HomePageBody";
import HomePageSideBar from "./HomePageSideBar";
import "./HomePageSideBar.css";




function SideBarIndex() {
    return (
        <>
            <div className="sideBarIndex">
                {/* <h1>Sidebar</h1> */}
                <HomePageSideBar />
                {/* <div className="songsIndex">
                    <h1 className="header">SONGS</h1>
                    <SongsIndex />
                </div> */}
                
            </div>
        </>
    );
}

export default SideBarIndex