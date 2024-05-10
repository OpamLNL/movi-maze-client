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

const initialState = {
    loading: false,
    games: [],
    currentGame: null,
    error: '',
};

const gamesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_GAMES_REQUEST:
        case CREATE_GAME_REQUEST:
        case DELETE_GAME_REQUEST:
        case UPDATE_GAME_REQUEST:
        case FETCH_GAME_BY_ID_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_GAMES_SUCCESS:
            return {
                ...state,
                loading: false,
                games: action.payload,
                error: '',
            };
        case FETCH_GAME_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                currentGame: action.payload,
                error: '',
            };
        case CREATE_GAME_SUCCESS:
            return {
                ...state,
                loading: false,
                games: [...state.games, action.payload],
                error: '',
            };
        case UPDATE_GAME_SUCCESS:
            const updatedGames = state.games.map(game =>
                game.id === action.payload.id ? action.payload : game
            );
            return {
                ...state,
                loading: false,
                games: updatedGames,
                error: '',
            };
        case DELETE_GAME_SUCCESS:
            const filteredGames = state.games.filter(game => game.id !== action.payload);
            return {
                ...state,
                loading: false,
                games: filteredGames,
                error: '',
            };
        case FETCH_GAMES_FAILURE:
        case CREATE_GAME_FAILURE:
        case DELETE_GAME_FAILURE:
        case UPDATE_GAME_FAILURE:
        case FETCH_GAME_BY_ID_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export { gamesReducer };
