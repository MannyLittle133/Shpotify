import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAlbums, fetchAlbums } from "../../store/albumsReducer";
import AlbumsIndexItem from "./albumsIndexItem";
import "./albums.css";

const AlbumsIndex = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchAlbums());
    }, [dispatch]);
    
    const albums = useSelector(getAlbums);
    
    // debugger
    return (
        <div>
            <h1 className="albumsHeader">Library</h1>
            <ul className="albumUl">
                {
                    albums.map((album, i) => {
                        return (<div className="albumList1"> <AlbumsIndexItem
                            key={i}
                            album={album}
                            />
                            </div>)
                    })
                }
            </ul>
        </div>
    );
}

export default AlbumsIndex;