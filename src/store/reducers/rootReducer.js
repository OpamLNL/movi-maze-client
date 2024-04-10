import { combineReducers } from 'redux';
import {genresReducer} from './genres/genresReducer';
import {movieReducer} from './movies/moviesReducer';
import {usersReducer} from "./users/usersReducer";
import {gamesReducer} from "./games/gamesReducer";
import {newsReducer} from "./news/newsReducer";
import {likeByNewsReducer} from "./likeByNews/likeByNewsReducer";

const rootReducer = combineReducers({


    games:  gamesReducer,
    news:  newsReducer,
    likeByNews:  likeByNewsReducer,

    genres: genresReducer,

    users:  usersReducer,
    movies: movieReducer



});

export {rootReducer};