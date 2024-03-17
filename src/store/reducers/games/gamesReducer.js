import { FETCH_GAMES_REQUEST, FETCH_GAMES_SUCCESS, FETCH_GAMES_FAILURE } from './gamesTypes';

const initialState = {
    loading: false,
    games: [],
    error: '',
};

const gamesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_GAMES_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_GAMES_SUCCESS:
            return {
                ...state,
                loading: false,
                games: [...action.payload.map(game => ({ ...game }))], // Глибока копія кожної гри
                error: '',
            };
        case FETCH_GAMES_FAILURE:
            return {
                ...state,
                loading: false,
                games: [],
                error: action.payload,
            };
        default:
            return state;
    }
};

export { gamesReducer };
