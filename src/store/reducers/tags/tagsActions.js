// tagsActions.js
import {
    FETCH_TAGS_REQUEST,
    FETCH_TAGS_SUCCESS,
    FETCH_TAGS_FAILURE
} from './tagsTypes';
import axios from 'axios';

import { apiBaseURL, urls } from "../../../configs/urls";

export const fetchTagsRequest = () => ({ type: FETCH_TAGS_REQUEST });
export const fetchTagsSuccess = (tags) => ({ type: FETCH_TAGS_SUCCESS, payload: tags });
export const fetchTagsFailure = (error) => ({ type: FETCH_TAGS_FAILURE, payload: error });

export const fetchTags = () => {
    return async (dispatch) => {
        dispatch(fetchTagsRequest());
        try {
            const response = await axios.get(`${apiBaseURL}${urls.tags.getAll}`);
            dispatch(fetchTagsSuccess(response.data));
        } catch (error) {
            dispatch(fetchTagsFailure(error.message));
        }
    };
};
