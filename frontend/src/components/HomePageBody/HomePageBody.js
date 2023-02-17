import React from "react";
import "./HomePageBody.css";
import SongsIndex from "../Songs/SongsIndex";
import AlbumsIndex from "../Albums/albumsIndex";

function Body() {
    return (
        <div className="body">
            <div className="movedBody">
            {/* <SongsIndex /> */}
            <AlbumsIndex/>
            {/* <h1>Body</h1> */}
            </div>
        </div>
    )
}

export default Body