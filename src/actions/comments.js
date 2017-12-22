import * as types from './types';
import axios from 'axios';
import { API_URL } from '../config';

export const fetchCommentsRequest = (articleId) => ({
    type: types.FETCH_COMMENTS_REQUEST,
    payload: articleId
});

export const fetchCommentsSuccess = (data) => ({
    type: types.FETCH_COMMENTS_SUCCESS,
    payload: data
});

export const fetchCommentsFailure = (err) => ({
    type: types.FETCH_COMMENTS_FAILURE,
    payload: err
});

export default (articleId) => {
    return (dispatch) => {
        dispatch(fetchCommentsRequest(articleId));
        return axios.get(`${API_URL}articles/${articleId}/comments`)
            .then(res => {
                dispatch(fetchCommentsSuccess(res.data.comments));
            })
            .catch(err => {
                dispatch(fetchCommentsFailure(err));
            })
    };
};