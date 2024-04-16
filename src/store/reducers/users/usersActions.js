import axios from 'axios';
import { apiBaseURL, urls } from "../../../configs/urls";
import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE, CREATE_USER_SUCCESS, CREATE_USER_FAILURE } from './usersTypes';


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

//створення нового юзера

const createUser = (userData) => {
    return async (dispatch) => {
        dispatch(fetchUsersRequest());
        console.log(`${apiBaseURL}${urls.users.create}`);
        try {
            const response = await axios.post(`${apiBaseURL}${urls.users.create}`, userData);
            const { user, token } = response.data;

            localStorage.setItem('jwtToken', token);

            localStorage.setItem('user', JSON.stringify(user));

            dispatch(createUserSuccess(user));
        } catch (error) {
            console.error('Error creating user:', error);
            dispatch(createUserFailure(error.message));
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


export { fetchUsers, createUser };