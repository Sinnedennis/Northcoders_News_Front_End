import * as types from './types';
import axios from 'axios';
import { API_URL } from '../config';

export const getArticlesByTopicRequest = (topic) => ({
  type: types.GET_ARTICLES_BY_TOPIC_REQUEST,
  payload: topic
});

export const getArticlesByTopicSuccess = (data) => ({
  type: types.GET_ARTICLES_BY_TOPIC_SUCCESS,
  payload: data
});

export const getArticlesByTopicFailure = (err) => ({
  type: types.GET_ARTICLES_BY_TOPIC_FAILURE,
  payload: err
});

export default (topic_id) => {
  return (dispatch) => {
    dispatch(getArticlesByTopicRequest(topic_id));
    return axios.get(`${API_URL}topics/${topic_id}/articles/`)
      .then(res => {
        dispatch(getArticlesByTopicSuccess(res.data));
      })
      .catch(err => {
        dispatch(getArticlesByTopicFailure(err.message));
      });
  };
};