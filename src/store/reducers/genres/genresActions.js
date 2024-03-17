import axios from 'axios';

import {baseURL, urls} from "../../../configs/urls";
import {API_KEY} from "../../../configs/urls";

import { FETCH_GENRES_REQUEST, FETCH_GENRES_SUCCESS, FETCH_GENRES_FAILURE } from './genresTypes';



const fetchGenres = (language) => {


    return (dispatch) => {

        dispatch(fetchGenresRequest());

        axios.get(baseURL + urls.genres, {
            params: {
                api_key: API_KEY,
                language: language,
            },
        })
            .then((response) => {
                const genres = response.data.genres;

                dispatch(fetchGenresSuccess(genres));
            })
            .catch((error) => {
                dispatch(fetchGenresFailure(error.message));
            });
    };
};

export const fetchGenresRequest = () => {
    return {
        type: FETCH_GENRES_REQUEST,
    };
};

export const fetchGenresSuccess = (genres) => {
    return {
        type: FETCH_GENRES_SUCCESS,

        payload: genres,
    };
};



export const fetchGenresFailure = (error) => {
    return {
        type: FETCH_GENRES_FAILURE,

        payload: error,
    };
};

export {fetchGenres};