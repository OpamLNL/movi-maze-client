import axios from 'axios';
import { apiBaseURL, urls } from "../../../configs/urls";
import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE, CREATE_USER_SUCCESS, CREATE_USER_FAILURE, AUTHENTICATE_USER } from './usersTypes';


const fetchUsers = () => {
    return async (dispatch) => {
        dispatch(fetchUsersRequest());
        try {
            const response = await axios.get(`${apiBaseURL}${urls.users.all}`);
            dispatch(fetchUsersSuccess(response.data));
        } catch (error) {
            console.error('Error fetching users:', error);
            dispatch(fetchUsersFailure(error.message));
        }
    };
};


export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST,
    };
};

export const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users,
    };
};

export const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error,
    };
};

const createUser = (userData) => {
    return async (dispatch) => {
        dispatch(fetchUsersRequest());
        try {
            const response = await axios.post(`${apiBaseURL}${urls.users.create}`, userData);

            const { user, accessToken, refreshToken } = response.data;

            localStorage.setItem('jwtAccessToken', accessToken);
            localStorage.setItem('jwtRefreshToken', refreshToken);

            localStorage.setItem('user', JSON.stringify(user));

            dispatch(createUserSuccess(user));
            dispatch({
                type: AUTHENTICATE_USER,
                payload: user
            });
        } catch (error) {
            console.error('Error creating user:', error);
            dispatch(createUserFailure(error.response?.data?.message || error.message));
        }
    };
};

export const createUserSuccess = (user) => {
    return {
        type: CREATE_USER_SUCCESS,
        payload: user,
    };
};

export const createUserFailure = (error) => {
    return {
        type: CREATE_USER_FAILURE,
        payload: error,
    };
};


const logoutUser = () => {
    return {
        type: 'LOGOUT_USER'
    };
};

export { fetchUsers, createUser, logoutUser };