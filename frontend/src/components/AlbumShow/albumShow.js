import React, { useEffect, useState, useRef } from "react";
import { useParams, Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlbum } from "../../store/albumsReducer";
import { fetchAlbumSongs } from "../../store/albumsReducer";
import csrfFetch from "../../store/csrf";
import "./albumShow.css";
import SongsIndex from "../Songs/SongsIndex";
import SongsIndexItem from "../Songs/SongsIndexItem";
import { fetchSongs, getSongs } from "../../store/songsReducer";
import { fetchArtists, getArtist } from "../../store/artistsReducer";


function AlbumShowPage() {
  const dispatch = useDispatch();
  const { albumId } = useParams();
  const { artistId } = useParams();
  const audioRef = useRef(null);

  const album = useSelector((state) =>
    state.albums[albumId] ? state.albums[albumId] : {}
  );
  const songs = useSelector((state) =>
    state.songs[albumId] ? state.songs[albumId] : {}
  );
    const artists = useSelector((state) =>
        state.artists[artistId] ? state.artists[artistId] : {}
    );
  const [artistName, setArtistName] = useState("");
  const { title, albumPhotoUrl, songId } = album;
//   const { albumID, artist, name, songUrl } = songs;
  const [songsArr, setSongsArr] = useState([]);
  const [songTitlesArr, setSongTitlesArr] = useState([]);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [albumSongs, setAlbumSongs] = useState([]);

    useEffect(() => {
        dispatch(fetchArtists()).then((res) => {
            let data = res.payload.artists;
            setArtistName(data);
        });
    }, [dispatch]);

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
  

//   function handleSongClick() {
//     const audioPlayer = document.getElementById("audio-player");
//     audioPlayer.src = songs.songUrl;
//     audioPlayer.play();
//   }

    function handleSongClick() {
        // audioRef.current.play();

        if (audioRef.current.paused) {
            audioRef.current.play();
        } else {    
            audioRef.current.pause();
        }
    }
    
    // pause and play using the spacebar

    useEffect(() => {
        const handleSpacebar = (e) => {
            if (e.code === "Space" && !audioRef.current.paused) {
              audioRef.current.pause();
            } else if (e.code === "Space" && audioRef.current.paused) {
              audioRef.current.play();
            }
        };

        document.addEventListener("keydown", handleSpacebar);

        return () => document.removeEventListener("keydown", handleSpacebar);
    }, []);


  

    // if (shouldRedirect) {
    //     return <Redirect to={`/${albumId}`} />;
    // }

    if (!songs || !album) {
        return null;
    }

    return (
    <div className="album-show-page">
      <div className="album-details">
        <img className="album-photo" src={album.albumPhotoUrl} alt="AlbumCover" />

        <div className="album-text">
          <p className="album-title">{album.title}</p>
          <div className="name-and-year">
            {/* <Link to={`/artists/${artistId}`} className="artist-name"> */}
                
            {/* <p className="artist-name">{album.artist.name}</p> */}
            <p className="artist-name">{songs.artist.name}</p>
            {/* </Link> */}
            
            {/* <p className="bullet-point">•</p> */}
            <p className="album-year">{album.year}</p>
          </div>
        </div>
      </div>

        <div className="album-songs">
            <div className="hashtag-and-title">
                {/* <p className="title-text">{album.title}</p> */}
                <p className="title-text"># Title Album</p>
            </div>

            <div className="album-show-tracks">
                <div key={songs.id} onClick={handleSongClick}>
                    {/* <audio id= 'audio-player' src={songs.songUrl}> {songs.title}</audio> */}
                    <audio id="audio-player" ref={audioRef} src={songs.songUrl}>{songs.title}</audio>

                    <h3>{songs.title}</h3>
                    <p>{songs.artist.name}</p>
                {/* <p>{artists}</p> */}
                {/* <p>{song.duration}</p> */}
                </div>
            </div>
        </div>
        
    </div>
    );
}


export default AlbumShowPage;
