import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchPlaylists, getPlaylists } from '../../store/playlistsReducer';
import './playlists.css'

const Playlists = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const playlists = useSelector(getPlaylists);
    const playlistImg = "https://shpotify-seeds.s3.amazonaws.com/playlistPhoto.jpeg"

    useEffect(() => {
        dispatch(fetchPlaylists());
    }, [dispatch]);

    

    // const handlePlaylistClick = (e) => {
    //     e.preventDefault();
    //     history.push(`/playlists/${e.target.id}`);
    // }

    return (
        <div className="playlists">
            <h1 className="playlistsHeader">Playlists</h1>
            <ul className="playlistsUl">
                {
                    playlists.map((playlist, i) => {
                        return (
                            <div className="playlistList1">
                                <li className="playlistList2" key={i} id={playlists.id}>
                                    {/* <img className="playlistImg" src={playlistImg} alt={playlists.name} /> */}
                                    <p className="playlistName">{playlists.name}</p>
                                </li>
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default Playlists;