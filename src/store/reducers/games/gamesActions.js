import axios from 'axios';
import { apiBaseURL, urls } from "../../../configs/urls";
import {
    FETCH_GAMES_REQUEST,
    FETCH_GAMES_SUCCESS,
    FETCH_GAMES_FAILURE,
    CREATE_GAME_REQUEST,
    CREATE_GAME_SUCCESS,
    CREATE_GAME_FAILURE,
    DELETE_GAME_REQUEST,
    DELETE_GAME_SUCCESS,
    DELETE_GAME_FAILURE,
    UPDATE_GAME_REQUEST,
    UPDATE_GAME_SUCCESS,
    UPDATE_GAME_FAILURE,
    FETCH_GAME_BY_ID_REQUEST,
    FETCH_GAME_BY_ID_SUCCESS,
    FETCH_GAME_BY_ID_FAILURE
} from './gamesTypes';

// Завантаження усіх ігор
export const fetchGames = () => {
    return async (dispatch) => {
        dispatch({ type: FETCH_GAMES_REQUEST });
        try {
            const response = await axios.get(`${apiBaseURL}${urls.games.getAll}`);
            dispatch({ type: FETCH_GAMES_SUCCESS, payload: response.data });
        } catch (error) {
            console.error('Error fetching games:', error);
            dispatch({ type: FETCH_GAMES_FAILURE, payload: error.message });
        }
    };
};

// Створення гри
export const createGame = (gameData) => {
    return async (dispatch) => {
        dispatch({ type: CREATE_GAME_REQUEST });
        try {
            const response = await axios.post(`${apiBaseURL}${urls.games.create}`, gameData);
            dispatch({ type: CREATE_GAME_SUCCESS, payload: response.data });
        } catch (error) {
            console.error('Error creating game:', error);
            dispatch({ type: CREATE_GAME_FAILURE, payload: error.message });
        }
    };
};

// Оновлення гри
export const updateGame = (gameData) => {
    return async (dispatch) => {
        dispatch({ type: UPDATE_GAME_REQUEST });
        try {
            const response = await axios.put(`${apiBaseURL}${urls.games.update}/${gameData.id}`, gameData);
            dispatch({ type: UPDATE_GAME_SUCCESS, payload: response.data });
        } catch (error) {
            console.error('Error updating game:', error);
            dispatch({ type: UPDATE_GAME_FAILURE, payload: error.message });
        }
    };
};

// Видалення гри
export const deleteGame = (gameId) => {
    return async (dispatch) => {
        dispatch({ type: DELETE_GAME_REQUEST });
        try {
            await axios.delete(`${apiBaseURL}${urls.games.delete}/${gameId}`);
            dispatch({ type: DELETE_GAME_SUCCESS, payload: gameId });
        } catch (error) {
            console.error('Error deleting game:', error);
            dispatch({ type: DELETE_GAME_FAILURE, payload: error.message });
        }
    };
};

// Завантаження гри за ID
export const fetchGameById = (gameId) => {
    return async (dispatch) => {
        dispatch({ type: FETCH_GAME_BY_ID_REQUEST });
        try {
            const response = await axios.get(`${apiBaseURL}${urls.games.getById}/${gameId}`);
            dispatch({ type: FETCH_GAME_BY_ID_SUCCESS, payload: response.data });
        } catch (error) {
            console.error('Error fetching game by ID:', error);
            dispatch({ type: FETCH_GAME_BY_ID_FAILURE, payload: error.message });
        }
    };
};
