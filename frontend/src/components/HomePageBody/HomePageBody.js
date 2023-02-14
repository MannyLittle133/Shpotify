import React from "react";
import "./HomePageBody.css";
import SongsIndex from "../Songs/SongsIndex";

function Body() {
    return (
        <div className="body">
            <div className="movedBody">
            <SongsIndex />
            {/* <h1>Body</h1> */}
            </div>
        </div>
    )
}

export default Body