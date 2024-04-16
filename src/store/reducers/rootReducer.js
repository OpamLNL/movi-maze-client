import { combineReducers } from 'redux';
import {tagsReducer} from './tags/tagsReducer';
import {usersReducer} from "./users/usersReducer";
import {gamesReducer} from "./games/gamesReducer";
import {newsReducer} from "./news/newsReducer";
import {likeByNewsReducer} from "./likeByNews/likeByNewsReducer";
import {commentsReducer} from "./comments/commentsReducer";

const rootReducer = combineReducers({


    games:  gamesReducer,
    news:  newsReducer,
    likeByNews:  likeByNewsReducer,

    tags: tagsReducer,

    users:  usersReducer,
    comments: commentsReducer



});

export {rootReducer};