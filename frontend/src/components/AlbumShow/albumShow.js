import React, { useEffect, useState } from "react";
import { useParams, Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlbum } from "../../store/albumsReducer";
import { fetchAlbumSongs } from "../../store/albumsReducer";
import csrfFetch from "../../store/csrf";
import "./albumShow.css";
import SongsIndex from "../Songs/SongsIndex";
import SongsIndexItem from "../Songs/SongsIndexItem";
import { fetchSongs } from "../../store/songsReducer";

function AlbumShowPage() {
  const dispatch = useDispatch();
  const { albumId } = useParams();
  const album = useSelector((state) =>
    state.albums[albumId] ? state.albums[albumId] : {}
  );
  const [artistName, setArtistName] = useState("");
  const { artistId, title, albumPhotoUrl, songId } = album;
  const [songsArr, setSongsArr] = useState([]);
  const [songTitlesArr, setSongTitlesArr] = useState([]);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  // use effect that fetches songs for the album

    // useEffect(() => {
    //     dispatch(fetchSongs(songId)).then((res) => {
    //         let data = res.payload.songs;
            
    //         if (data) {
    //             for (const [key, value] of Object.entries(data)) {
    //                 if (!songTitlesArr.includes(value.title)) {
    //                     setSongsArr((songsArr) => [...songsArr, value]);
    //                     setSongTitlesArr((songTitlesArr) => [
    //                         ...songTitlesArr,
    //                         value.title,
    //                     ]);
    //                 }
    //             }
    //         }
    //     });
    // }, [albumId, dispatch]);

    useEffect(() => {
        if (albumId === songId) {
          dispatch(fetchSongs(albumId)).then((res) => {
            let data = res.payload.songs;
      
            if (data) {
              setSongsArr(data);
              setSongTitlesArr(data.map(song => song.title));
            }
          });
        }
      }, [albumId, songId, dispatch]);

//   useEffect(() => {
//     dispatch(fetchAlbum(albumId)).then((res) => {
//       let data = res.payload.album;

//       if (data.artist.name) {
//         setArtistName(data.artist.name);
//       }

//       if (data.songs) {
//         for (const [key, value] of Object.entries(data.songs)) {
//           if (!songTitlesArr.includes(value.title)) {
//             setSongsArr((songsArr) => [...songsArr, value]);
//             setSongTitlesArr((songTitlesArr) => [
//               ...songTitlesArr,
//               value.title,
//             ]);
//           }
//         }
//       }
//     });
//   }, [albumId, dispatch]);

  

  if (shouldRedirect) {
    return <Redirect to={`/albums/${albumId}`} />;
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

        {songsArr.map((song, idx) => (
          <SongsIndex
            key={idx}
            id={idx}
            songTitle={song.title}
            artistName={song.artist}
            songUrl={song.songUrl}
            albumId={albumId}
          />
        ))}
      </div>
    </div>
  );
}
// import SongsIndex from "../Songs/SongsIndex";

export default AlbumShowPage;
