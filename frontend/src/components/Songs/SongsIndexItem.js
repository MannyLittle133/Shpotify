import React from "react";
import "./SongsIndexItem.css"

const SongsIndexItem = ({ song }) => {
    return (
        
            <div className="songList">
                    
                <img className="albumArtMain" src={song.albumPhotoUrl} alt="album photo" />

                    {/* <audio controls>
                        <p src={song.songUrl} type="audio/mpeg"> </p>
                    </audio> */}
                <div>
                    <p className="songTitle"> {song.title}</p>
                    <p className="songArtist">{song.artist}</p>
                    {/* <p className="audio">{song.songUrl}</p> */}
                    {/* <p className="songAlbum">{song.album}</p> */}
                    {/* <p>{song.album_photo_url}</p> */}
                </div>
                <div>
                    </div>
            </div>
    )
};


export default SongsIndexItem;