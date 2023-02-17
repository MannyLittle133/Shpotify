import React from "react";
import "./albums.css";

const AlbumsIndexItem = ({ album }) => {
    // debugger
    return (
        <div className="albumList">
            <img className="albumArtMain" src={album.albumPhotoUrl} alt="album photo" />
            <div>
                <p className="albumTitle"> {album.title}</p>
                <p className="albumArtist">{album.artist.name}</p>
            </div>
        </div>
    )
}

export default AlbumsIndexItem;
