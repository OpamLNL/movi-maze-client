import axios from 'axios';
import { apiBaseURL, urls } from "../../../configs/urls";
import { FETCH_GAMES_REQUEST, FETCH_GAMES_SUCCESS, FETCH_GAMES_FAILURE } from './gamesTypes';

const fetchGames = () => {
    return async (dispatch) => {
        dispatch(fetchGamesRequest());

        try {
            const response = await axios.get(`${apiBaseURL}${urls.games.all}`);
            dispatch(fetchGamesSuccess(response.data));
        } catch (error) {
            console.error('Error fetching games:', error);
            dispatch(fetchGamesFailure(error.message));
        }
    };
};

export const fetchGamesRequest = () => {
    return {
        type: FETCH_GAMES_REQUEST,
    };
};

export const fetchGamesSuccess = (games) => {
    return {
        type: FETCH_GAMES_SUCCESS,
        payload: [...games], // Створюємо новий масив, щоб уникнути мутацій
    };
};

export const fetchGamesFailure = (error) => {
    return {
        type: FETCH_GAMES_FAILURE,
        payload: error,
    };
};

export { fetchGames };
