import { combineReducers } from 'redux';
import {genresReducer} from './genres/genresReducer';
import {movieReducer} from './movies/moviesReducer';
import {usersReducer} from "./users/usersReducer";
import {gamesReducer} from "./games/gamesReducer";

const rootReducer = combineReducers({


    games:  gamesReducer,

    genres: genresReducer,

    users:  usersReducer,
    movies: movieReducer



});

export {rootReducer};