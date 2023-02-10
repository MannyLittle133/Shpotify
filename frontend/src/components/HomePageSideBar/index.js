import React from "react";
import HomePageSideBar from "./HomePageSideBar";
import "./HomePageSideBar.css";
import SongsIndex from "./SongsIndex";


function HomePage() {
    return (
        <>
            <div className="homePage">

                <HomePageSideBar />
                <div style={{ marginLeft: "500px", paddingTop: "100px" }}>
                    <h1>FOOBAR</h1>
                    <SongsIndex />
                </div>
            </div>
        </>
    );
}

export default HomePage