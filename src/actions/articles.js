import * as types from './types';
import axios from 'axios';
import API_URL from './API_URL';

export const fetchArticleRequest = () => ({
    type: types.FETCH_ARTICLES_REQUEST
});

export const fetchArticleSuccess = (data) => ({
    type: types.FETCH_ARTICLES_SUCCESS,
    payload: data
});

export const fetchArticleFailure = (err) => ({
    type: types.FETCH_ARTICLES_FAILURE,
    payload: err
});

export default () => {
    return (dispatch) => {
        dispatch(fetchArticleRequest());
        return axios.get(`${API_URL}articles/`)
            .then(res => {
                dispatch(fetchArticleSuccess(res.data.articles));
            })
            .catch(err => {
                dispatch(fetchArticleFailure(err));
            })
    };
};