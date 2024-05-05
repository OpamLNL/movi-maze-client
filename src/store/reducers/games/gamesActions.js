import axios from 'axios';
import { apiBaseURL, urls } from "../../../configs/urls";
import {
    CREATE_GAME_REQUEST,
    CREATE_GAME_SUCCESS,
    CREATE_GAME_FAILURE,
    FETCH_GAMES_REQUEST,
    FETCH_GAMES_SUCCESS,
    FETCH_GAMES_FAILURE,
    DELETE_GAME_REQUEST,
    DELETE_GAME_SUCCESS,
    DELETE_GAME_FAILURE,
    UPDATE_GAME_REQUEST,
    UPDATE_GAME_SUCCESS,
    UPDATE_GAME_FAILURE
} from './gamesTypes';

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

export const createGameRequest = () => {
    return {
        type: CREATE_GAME_REQUEST,
    };
};

export const createGameSuccess = (newGame) => {
    return {
        type: CREATE_GAME_SUCCESS,
        payload: newGame,
    };
};

export const createGameFailure = (error) => {
    return {
        type: CREATE_GAME_FAILURE,
        payload: error,
    };
};

export const createGame = (gameData) => {
    return async (dispatch) => {
        dispatch(createGameRequest());

        try {
            const response = await axios.post(`${apiBaseURL}${urls.games.create}`, gameData);
            dispatch(createGameSuccess(response.data));
        } catch (error) {
            console.error('Error creating game:', error);
            dispatch(createGameFailure(error.message));
        }
    };
};

export const deleteGameRequest = () => {
    return {
        type: DELETE_GAME_REQUEST,
    };
};

export const deleteGameSuccess = (gameId) => {
    return {
        type: DELETE_GAME_SUCCESS,
        payload: gameId,
    };
};

export const deleteGameFailure = (error) => {
    return {
        type: DELETE_GAME_FAILURE,
        payload: error,
    };
};

export const deleteGame = (gameId) => {
    return async (dispatch) => {
        dispatch(deleteGameRequest());

        try {
            await axios.delete(`${apiBaseURL}${urls.games.delete}/${gameId}`);
            dispatch(deleteGameSuccess(gameId));
        } catch (error) {
            console.error('Error deleting game:', error);
            dispatch(deleteGameFailure(error.message));
        }
    };
};

export const updateGameRequest = () => {
    return {
        type: UPDATE_GAME_REQUEST,
    };
};

export const updateGameSuccess = (updatedGame) => {
    return {
        type: UPDATE_GAME_SUCCESS,
        payload: updatedGame,
    };
};

export const updateGameFailure = (error) => {
    return {
        type: UPDATE_GAME_FAILURE,
        payload: error,
    };
};

export const updateGame = (gameData) => {
    return async (dispatch) => {
        dispatch(updateGameRequest());

        try {
            const response = await axios.put(`${apiBaseURL}${urls.games.update}/${gameData.id}`, gameData);
            dispatch(updateGameSuccess(response.data));
        } catch (error) {
            console.error('Error updating game:', error);
            dispatch(updateGameFailure(error.message));
        }
    };
};

export { fetchGames };
