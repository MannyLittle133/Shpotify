import React from "react";
import "./albums.css";
import { Link } from "react-router-dom";

const AlbumsIndexItem = ({ album }) => {
    // debugger
    return (
        <Link to={`/${album.id}`}>
        <div className="albumList">
        {/* on click of album, go to album show page with album id as param in url  */}
            <img className="albumArtMain" src={album.albumPhotoUrl} alt="album photo" />
            <div>
                <p className="albumTitle"> {album.title}</p>
                <p className="albumArtist">{album.artist.name}</p>
                
            </div>
        </div>
        </Link>
    )
}

export default AlbumsIndexItem;
