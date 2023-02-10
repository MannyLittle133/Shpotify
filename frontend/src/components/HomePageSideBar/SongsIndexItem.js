import React from "react";

const SongsIndexItem = ({ song }) => {
    return (
        <li>
            <p>fdsfsd</p>
            <p style={{ fontWeight: "800", color: "blue"}}>{song.title}</p>
            <p>{song.artist}</p>
            <p>{song.album}</p>
            <p>{song.album_photo_url}</p>
        </li>
    )
};


export default SongsIndexItem;