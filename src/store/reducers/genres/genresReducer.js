import { FETCH_GENRES_REQUEST, FETCH_GENRES_SUCCESS, FETCH_GENRES_FAILURE } from './genresTypes';

const initialState = {
    loading: false,
    genres: [],
    error: '',
};

const genresReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_GENRES_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_GENRES_SUCCESS:
            return {
                ...state,
                loading: false,
                genres: action.payload,
                error: '',
            };
        case FETCH_GENRES_FAILURE:
            return {
                ...state,
                loading: false,
                genres: [],
                error: action.payload,
            };
        default:
            return state;
    }
};
export {genresReducer};