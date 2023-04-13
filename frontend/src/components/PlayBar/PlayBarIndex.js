import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentTrack } from '../../store/currentTrackReducer';
import { useLocation } from 'react-router-dom';
import "./MediaBar.css"
const MediaBar = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const currentTrack = useSelector((state) => state.currentTrack)
    // const currentTrack = useSelector((state) => state.id[currentSongId])
    const currentAlbumSongs = useSelector(({ currentAlbum }) => {
        return currentAlbum.id ? Object.values(currentAlbum.songs) : []
    });

    if (!currentTrack) {
        return null
    }


    if (location.pathname === '/signup' || location.pathname === '/login') {
        return null;
    }

    return (
        <AudioPlayer
        className="songbar"
        src={currentTrack}
        showSkipControls
        showFilledVolume
        />
    )
};

export default MediaBar;