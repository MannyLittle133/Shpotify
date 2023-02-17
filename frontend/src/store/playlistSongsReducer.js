import csrfFetch from "./csrf";
import { fetchPlaylist } from "./playlistsReducer";
import { fetchPlaylists } from "./playlistsReducer";

export const RECEIVE_PLAYLIST_SONG = "playlistSongs/RECEIVE_PLAYLIST_SONG";
export const RECEIVE_PLAYLIST_SONGS = "playlistSongs/RECEIVE_PLAYLIST_SONGS";
export const REMOVE_PLAYLIST_SONG = "playlistSongs/REMOVE_PLAYLIST_SONG";

export const receivePlaylistSong = (playlistSong) => ({
    type: RECEIVE_PLAYLIST_SONG,
    playlistSong,
});

export const receivePlaylistSongs = (playlistSongs) => ({
    type: RECEIVE_PLAYLIST_SONGS,
    playlistSongs,
});

export const removePlaylistSong = (playlistSongId) => ({
    type: REMOVE_PLAYLIST_SONG,
    playlistSongId,
});

export const getPlaylistSong = (state, playlistSongId) => {
    if (state && state.playlistSongs) {
        return state.playlistSongs[playlistSongId];
    }
}

export const getPlaylistSongs = (state) => {
    if (state && state.playlistSongs) {
        return Object.values(state.playlistSongs);
    } else {
        return [];
    }
}

export const fetchPlaylistSong = (playlistSongId) => async (dispatch) => {
    const response = await csrfFetch(`/api/playlistSongs/${playlistSongId}`);

    if (response.ok) {
        const data = await response.json();
        dispatch(receivePlaylistSong(data));
    }
}

export const fetchPlaylistSongs = () => async (dispatch) => {
    const response = await csrfFetch("/api/playlistSongs");

    if (response.ok) {
        const data = await response.json();
        dispatch(receivePlaylistSongs(data));
    }
}

export const createPlaylistSong = (playlistSong) => async (dispatch) => {
    const response = await csrfFetch("/api/playlistSongs", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(playlistSong),
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(receivePlaylistSong(data));
        dispatch(fetchPlaylist(data.playlistId));
        dispatch(fetchPlaylists());
    }
}

export const deletePlaylistSong = (playlistSongId) => async (dispatch) => {
    const response = await csrfFetch(`/api/playlistSongs/${playlistSongId}`, {
        method: "DELETE",
    });

    if (response.ok) {
        dispatch(removePlaylistSong(playlistSongId));
    }
}

const playlistSongsReducer = (state = {}, action) => {
    const newState = { ...state };

    switch (action.type) {
        case RECEIVE_PLAYLIST_SONG:
            newState[action.playlistSong.id] = action.playlistSong;
            return newState;
        case RECEIVE_PLAYLIST_SONGS:
            return action.playlistSongs;
        case REMOVE_PLAYLIST_SONG:
            delete newState[action.playlistSongId];
            return newState;
        default:
            return state;
    }
}

export default playlistSongsReducer;
