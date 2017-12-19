import * as types from './types';
import axios from 'axios';
import API_URL from './API_URL';

export const fetchArticlesByTopicRequest = (topic) => ({
    type: types.FETCH_ARTICLES_BY_TOPIC_REQUEST,
    payload: topic
});

export const fetchArticlesByTopicSuccess = (data) => ({
    type: types.FETCH_ARTICLES_BY_TOPIC_SUCCESS,
    payload: data
});

export const fetchArticlesByTopicFailure = (err) => ({
    type: types.FETCH_ARTICLES_BY_TOPIC_FAILURE,
    payload: err
});

export default (topic_id) => {
    return (dispatch) => {
        dispatch(fetchArticlesByTopicRequest(topic_id));
        return axios.get(`${API_URL}topics/${topic_id}/articles/`)
            .then(res => {
                dispatch(fetchArticlesByTopicSuccess(res.data));
            })
            .catch(err => {
                dispatch(fetchArticlesByTopicFailure(err));
            })
    };
};