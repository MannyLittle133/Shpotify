import csrfFetch from "./csrf.js";

const RECEIVE_SONGS = "songs/RECEIVE_SONGS";


export const receiveSongs = (songs) => ({
    type: RECEIVE_SONGS,
    songs,
});


export const getSongs = (state) => {

    debugger
    if (state && state.songs) {
        debugger
        return Object.values(state.songs);
    }


    return [];
};


export const fetchSongs = () => async (dispatch) => {
    const response = await csrfFetch("/api/songs");

    if (response.ok) {
        const data = await response.json();
        dispatch(receiveSongs(data));
    }
};


const songsReducer = (state = {}, action) => {
    const newState = { ...state };

    switch (action.type) {
        case RECEIVE_SONGS:
            return { ...newState, ...action.songs}
        default:
            return state;
    }
};


export default songsReducer;