import csrfFetch from "./csrf";


export const RECEIVE_PLAYLIST = "playlists/RECEIVE_PLAYLIST";
export const RECEIVE_PLAYLISTS = "playlists/RECEIVE_PLAYLISTS";
export const REMOVE_PLAYLIST = "playlists/REMOVE_PLAYLIST";

export const receivePlaylist = (playlist) => ({
    type: RECEIVE_PLAYLIST,
    playlist,
});

export const receivePlaylists = (playlists) => ({
    type: RECEIVE_PLAYLISTS,
    playlists,
});

export const removePlaylist = (playlistId) => ({
    type: REMOVE_PLAYLIST,
    playlistId,
});

export const getPlaylist = (state, playlistId) => {
    if (state && state.playlists) {
        return state.playlists[playlistId];
    }
}

export const getPlaylists = (state) => {
    if (state && state.playlists) {
        return Object.values(state.playlists);
    } else {
        return [];
    }
}

export const fetchPlaylist = (playlistId) => async (dispatch) => {
    const response = await csrfFetch(`/api/playlists/${playlistId}`);

    if (response.ok) {
        const data = await response.json();
        dispatch(receivePlaylist(data));
    }
}

export const fetchPlaylists = () => async (dispatch) => {
    const response = await csrfFetch("/api/playlists");

    if (response.ok) {
        const data = await response.json();
        dispatch(receivePlaylists(data));
    }
}

export const createPlaylist = (playlist) => async (dispatch) => {
    const response = await csrfFetch("/api/playlists", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(playlist),
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(receivePlaylist(data));
    }
}

export const updatePlaylist = (playlist) => async (dispatch) => {
    const response = await csrfFetch(`/api/playlists/${playlist.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(playlist),
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(receivePlaylist(data));
    }
}

export const deletePlaylist = (playlistId) => async (dispatch) => {
    const response = await csrfFetch(`/api/playlists/${playlistId}`, {
        method: "DELETE",
    });

    if (response.ok) {
        dispatch(removePlaylist(playlistId));
    }
}

const playlistsReducer = (state = {}, action) => {
    const newState = { ...state };

    switch (action.type) {
        case RECEIVE_PLAYLIST:
            newState[action.playlist.id] = action.playlist;
            return newState;
        case RECEIVE_PLAYLISTS:
            return { ...newState, ...action.playlists }
        case REMOVE_PLAYLIST:
            delete newState[action.playlistId];
            return newState;
        default:
            return state;
    }
}

export default playlistsReducer;

