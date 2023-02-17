import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import sessionReducer from './session'; 
import songsReducer from './songsReducer';
import albumsReducer from './albumsReducer';
import artistsReducer from './artistsReducer';
import playlistsReducer from './playlistsReducer';
import playlistSongsReducer from './playlistSongsReducer';
import currentTrackReducer from './currentTrackReducer';




const rootReducer = combineReducers({
    // add reducers here
    // session: session
    session: sessionReducer,
    songs: songsReducer,
    albums: albumsReducer,
    artists: artistsReducer,
    playlists: playlistsReducer,
    playlistSongs: playlistSongsReducer,
    currentTrack: currentTrackReducer
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require('redux-logger').default;
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;