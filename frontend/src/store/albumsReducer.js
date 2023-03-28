import csrfFetch from "./csrf";

export const RECEIVE_ALBUM = "albums/RECEIVE_ALBUM";
export const RECEIVE_ALBUMS = "albums/RECEIVE_ALBUMS";
export const RECEIVE_ALBUM_SONGS = "albums/RECEIVE_ALBUM_SONGS";

export const receiveAlbum = (album) => ({
    type: RECEIVE_ALBUM,
    album,
});

export const receiveAlbums = (albums) => ({
    type: RECEIVE_ALBUMS,
    albums,
});

export const getAlbum = (state, albumId) => {
    if (state && state.albums) {
        return state.albums[albumId];
    }
}

export const getAlbums = (state) => {
    if (state && state.albums) {
        
        return Object.values(state.albums);
    } else {
        
        return [];
    }

}

export const fetchAlbum = (albumId) => async (dispatch) => {
    const response = await csrfFetch(`/api/albums/${albumId}`);

    if (response.ok) {
        const data = await response.json();
        dispatch(receiveAlbum(data));
    }
}

export const fetchAlbums = () => async (dispatch) => {
    const response = await csrfFetch("/api/albums");
    // debugger
    if (response.ok) {
        const data = await response.json();
        dispatch(receiveAlbums(data));
    }
}

// get songs from the album selected

export const fetchAlbumSongs = (albumId) => async (dispatch) => {
    const response = await csrfFetch(`/api/albums/${albumId}/songs`);

    if (response.ok) {
        const data = await response.json();
        dispatch(receiveAlbum(data));
    }
}




const albumsReducer = (state = {}, action) => {
    const newState = { ...state };

    switch (action.type) {
        case RECEIVE_ALBUM:
            newState[action.album.id] = action.album;
            return newState;
        case RECEIVE_ALBUMS:
            return { ...newState, ...action.albums }
        case RECEIVE_ALBUM_SONGS:
            newState[action.album.id] = action.album;
            return newState;
        default:
            return state;
    }
}

export default albumsReducer;