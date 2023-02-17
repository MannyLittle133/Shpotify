import csrfFetch from "./csrf";

export const RECEIVE_ARTIST = "artists/RECEIVE_ARTIST";

export const RECEIVE_ARTISTS = "artists/RECEIVE_ARTISTS";

export const receiveArtist = (artist) => ({
    type: RECEIVE_ARTIST,
    artist,
});

export const receiveArtists = (artists) => ({
    type: RECEIVE_ARTISTS,
    artists,
});

export const getArtist = (state, artistId) => {
    if (state && state.artists) {
        return state.artists[artistId];
    }
}

export const getArtists = (state) => {
    if (state && state.artists) {
        return Object.values(state.artists);
    } else {
        
        return [];
    }

}

export const fetchArtist = (artistId) => async (dispatch) => {
    const response = await csrfFetch(`/api/artists/${artistId}`);

    if (response.ok) {
        const data = await response.json();
        dispatch(receiveArtist(data));
    }
}

export const fetchArtists = () => async (dispatch) => {
    const response = await csrfFetch("/api/artists");

    if (response.ok) {
        const data = await response.json();
        dispatch(receiveArtists(data));
    }
}


const artistsReducer = (state = {}, action) => {
    const newState = { ...state };

    switch (action.type) {
        case RECEIVE_ARTIST:
            newState[action.artist.id] = action.artist;
            return newState;
        case RECEIVE_ARTISTS:
            return { ...newState, ...action.artists }
        default:
            return state;
    }
}

export default artistsReducer;
