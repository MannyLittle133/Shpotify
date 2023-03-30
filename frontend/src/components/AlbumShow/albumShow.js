import React, { useEffect, useState } from "react";
import { useParams, Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlbum } from "../../store/albumsReducer";
import { fetchAlbumSongs } from "../../store/albumsReducer";
import csrfFetch from "../../store/csrf";
import "./albumShow.css";
import SongsIndex from "../Songs/SongsIndex";
import SongsIndexItem from "../Songs/SongsIndexItem";
import { fetchSongs, getSongs } from "../../store/songsReducer";

function AlbumShowPage() {
  const dispatch = useDispatch();
  const { albumId } = useParams();
  const album = useSelector((state) =>
    state.albums[albumId] ? state.albums[albumId] : {}
  );
  const songs = useSelector((state) =>
    state.songs[albumId] ? state.songs[albumId] : {}
);
  const [artistName, setArtistName] = useState("");
  const { artistId, title, albumPhotoUrl, songId } = album;
  const [songsArr, setSongsArr] = useState([]);
  const [songTitlesArr, setSongTitlesArr] = useState([]);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [albumSongs, setAlbumSongs] = useState([]);


  useEffect(() => {
    dispatch(fetchSongs()).then((res) => {
      let data = res.payload.songs;
      setAlbumSongs(data);
    });
  }, [dispatch]);
  
  useEffect(() => {
    if (albumId === songId) {
      dispatch(fetchSongs(albumId)).then((res) => {
        let data = res.payload.songs;
  
        if (data) {
          let albumSongsFiltered = albumSongs.filter(
            (song) => song.albumId === albumId
          );
          setSongsArr(albumSongsFiltered);
          setSongTitlesArr(albumSongsFiltered.map((song) => song.title));
        }
      });
    }
  }, [albumId, songId, dispatch, albumSongs]);
  




  

  if (shouldRedirect) {
    return <Redirect to={`/${albumId}`} />;
  }

  return (
    <div className="album-show-page">
      <div className="album-details">
        <img className="album-photo" src={album.albumPhotoUrl} alt="AlbumCover" />

        <div className="album-text">
          <p className="album-title">{album.title}</p>
          <div className="name-and-year">
            {/* <Link to={`/artists/${artistId}`} className="artist-name"> */}
                
            <p className="artist-name">{album.artist.name}</p>
            {/* </Link> */}
            
            {/* <p className="bullet-point">•</p> */}
            <p className="album-year">{album.year}</p>
          </div>
        </div>
      </div>

      <div className="album-songs">
        <div className="hashtag-and-title">
          <p className="title-text">{album.title}</p>
        </div>
        <div>
        <div key={songs.id}>
        <h3 src={songs.songUrl}> {songs.title}</h3>
        {/* <p>{song.artist}</p> */}
        {/* <p>{song.duration}</p> */}
      </div>
  </div>
        
      </div>
    </div>
  );
}


export default AlbumShowPage;
