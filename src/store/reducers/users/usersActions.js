import axios from 'axios';
import {apiBaseURL, urls, API_KEY} from "../../../configs/urls";
import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from './usersTypes';

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

export { fetchUsers };