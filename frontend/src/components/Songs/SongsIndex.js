import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSongs, getSongs } from "../../store/songsReducer";
import SongsIndexItem from "./SongsIndexItem";

const SongsIndex = () => {
    const dispatch = useDispatch();
    
    
    useEffect(() => {
        dispatch(fetchSongs());
    }, [dispatch]);
    
    const songs = useSelector(getSongs);

    // debugger
    return (
        <div>
        <h1 className="songsHeader">Songs</h1>
        
            <ul className="songUl">
                {
                    songs.map((song, i) => {

                        
                        return <div className="songList1"> <SongsIndexItem
                            key={i}
                            song={song}
                            />
                            </div>
                    })
                }

            </ul>
        </div>
    );
};

export default SongsIndex;