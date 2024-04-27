import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAILURE,
    AUTHENTICATE_USER
} from './usersTypes';

const initialState = {
    loading: false,
    users: [],
    error: '',
    currentUser: null,
    isAuthenticated: false
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
        case CREATE_USER_FAILURE:
            return {
                ...state,
                loading: true,
            };
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: [...action.payload],
                error: ''
            };
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                loading: false,
                users: [],
                error: action.payload
            };
        case CREATE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                currentUser: action.payload,
                isAuthenticated: true,
                error: ''
            };
        case AUTHENTICATE_USER:
            return {
                ...state,
                isAuthenticated: true,
                currentUser: action.payload
            };
        default:
            return state;
    }
};

export { usersReducer };
