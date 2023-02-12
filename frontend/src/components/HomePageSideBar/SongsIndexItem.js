import React from "react";
import "./SongsIndexItem.css"

const SongsIndexItem = ({ song }) => {
    return (
        <div className="backDrop">
            
        

        <li className="songList">
            <img src={song.album_photo_url} alt="album photo" />
            <p>{song.title}</p>
            <p>{song.artist}</p>
            <p>{song.album}</p>
            {/* <p>{song.album_photo_url}</p> */}
        </li>
        </div>
    )
};


export default SongsIndexItem;