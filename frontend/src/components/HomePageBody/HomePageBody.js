import React from "react";
import "./HomePageBody.css";
import SongsIndex from "../Songs/SongsIndex";
import AlbumsIndex from "../Albums/albumsIndex";
import AlbumShowPage from "../AlbumShow/albumShow";
import { Route } from "react-router-dom";


function Body() {
    return (
        <div className="body">
            <div className="movedBody">
            {/* <SongsIndex /> */}
            <AlbumsIndex/>
            {/* <Route path="/:albumsId" component={AlbumShowPage} /> */}

            {/* <h1>Body</h1> */}
            </div>
        </div>
    )
}

export default Body