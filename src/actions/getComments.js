import * as types from './types';
import axios from 'axios';
import { API_URL } from '../config';

export const getCommentsRequest = (articleId) => ({
  type: types.GET_COMMENTS_REQUEST,
  payload: articleId
});

export const getCommentsSuccess = (data) => ({
  type: types.GET_COMMENTS_SUCCESS,
  payload: data
});

export const getCommentsFailure = (err) => ({
  type: types.GET_COMMENTS_FAILURE,
  payload: err
});

export default (articleId) => {
  return (dispatch) => {
    dispatch(getCommentsRequest(articleId));
    return axios.get(`${API_URL}articles/${articleId}/comments/`)
      .then(res => {
        dispatch(getCommentsSuccess(res.data.comments));
      })
      .catch(err => {
        dispatch(getCommentsFailure(err.message));
      });
  };
};