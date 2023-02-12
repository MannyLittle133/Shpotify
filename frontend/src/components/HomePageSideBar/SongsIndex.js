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

    debugger
    return (
        <ul>
            {
                songs.map((song, i) => {
                    return <SongsIndexItem
                        key={i}
                        song={song} />
                })
            }

        </ul>
    );
};

export default SongsIndex;