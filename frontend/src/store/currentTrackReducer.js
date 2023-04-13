import csrfFetch from "./csrf";

export const RECEIVE_CURRENT_TRACK = "currentTrack/RECEIVE_CURRENT_TRACK";
export const SET_CURRENT_TRACK = "currentTrack/SET_CURRENT_TRACK";

export const receiveCurrentTrack = (currentTrack) => ({
    type: RECEIVE_CURRENT_TRACK,
    currentTrack,
});

export const getCurrentTrack = (state) => {
    if (state && state.currentTrack) {
        return state.currentTrack;
    }
}

export const setCurrentTrack = (songId) => ({
    type: SET_CURRENT_TRACK,
    songId,
})

export const fetchCurrentTrack = (currentTrackId) => async (dispatch) => {
    const response = await csrfFetch(`/api/currentTracks/${currentTrackId}`);

    if (response.ok) {
        const data = await response.json();
        dispatch(receiveCurrentTrack(data));
    }
}

const currentTrackReducer = (state = {}, action) => {
    const newState = { ...state };

    switch (action.type) {
        case SET_CURRENT_TRACK:
            newState[action.currentTrack.id] = action.currentTrack;
            return newState;
        default:
            return state;
    }
}

export default currentTrackReducer;