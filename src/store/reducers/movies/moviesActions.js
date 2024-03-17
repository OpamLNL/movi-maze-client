import axios from 'axios';

// https://api.themoviedb.org/3/movie/157336?api_key={api_key}
//     https://api.themoviedb.org/3/movie/157336/videos?api_key={api_key}
import {API_KEY} from "../../../configs/urls";
import {baseURL, urls} from "../../../configs/urls";
import { FETCH_MOVIES_REQUEST, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE, SET_FILTER } from './moviesTypes';

//////////////


// const urls = {
//     nowPlaying: '/movie/now_playing',
//     popular: '/movie/popular',
//     topRated: '/movie/top_rated',
//     upcoming: '/movie/upcoming',
// };

export const fetchMoviesRequest = () => {
    return {
        type: FETCH_MOVIES_REQUEST,
    };
};

export const fetchMoviesSuccess = (movies, totalMovies, totalPages, genreID, language) => {
    return {
        type: FETCH_MOVIES_SUCCESS,
           movies,
           totalMovies,
           totalPages,
    };
};

export const fetchMoviesFailure = (error) => {
    return {
        type: FETCH_MOVIES_FAILURE,
        payload: error,
    };
};

export const fetchMovies = (page, totalMovies, totalPages, genreID, language) => {

    return (dispatch) => {
        dispatch(fetchMoviesRequest());

        axios
            .get(baseURL + urls.movies, {
                params: {
                    api_key: API_KEY,
                    language: language,
                    page: page,
                    with_genres: genreID
                },
            })
            .then((response) => {
                const movies = response.data.results;
                const totalMovies = response.data.total_results;
                const totalPages = response.data.total_pages;

                dispatch(fetchMoviesSuccess(movies, totalMovies, totalPages));
            })
            .catch((error) => {
                const errorMsg = error.message;
                dispatch(fetchMoviesFailure(errorMsg));
            });


    };
};

export const setFilter = (filter) => {
    return {
        type: SET_FILTER,
        payload: filter,
    };
};






