import axios from 'axios';
import { apiBaseURL, urls } from "../../../configs/urls";
import { FETCH_NEWS_REQUEST, FETCH_NEWS_SUCCESS, FETCH_NEWS_FAILURE } from './newsTypes';

const fetchNews = () => {
    return async (dispatch) => {
        dispatch(fetchNewsRequest());

        try {
            const response = await axios.get(`${apiBaseURL}${urls.news.getAll}`); // Змінено тут
            dispatch(fetchNewsSuccess(response.data));
        } catch (error) {
            console.error('Error fetching news:', error);
            dispatch(fetchNewsFailure(error.message));
        }
    };
};

export const fetchNewsRequest = () => {
    return {
        type: FETCH_NEWS_REQUEST,
    };
};

export const fetchNewsSuccess = (news) => {
    return {
        type: FETCH_NEWS_SUCCESS,
        payload: [...news],
    };
};

export const fetchNewsFailure = (error) => {
    return {
        type: FETCH_NEWS_FAILURE,
        payload: error,
    };
};

export { fetchNews };
