import React from "react";
import HomePageSideBar from "./HomePageSideBar";
import "./HomePageSideBar.css";
import SongsIndex from "./SongsIndex";
import "./SongsIndexItem.css"

function HomePage() {
    return (
        <>
            <div className="homePage">

                <HomePageSideBar />
                <div style={{ marginLeft: "250px", paddingTop: "10px" }}>
                    <h1 className="header">SONGS</h1>
                    <SongsIndex />
                </div>
            </div>
        </>
    );
}

export default HomePage