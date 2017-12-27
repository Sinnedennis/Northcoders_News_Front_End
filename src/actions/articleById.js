import * as types from './types';
import axios from 'axios';
import { API_URL } from '../config';

export const fetchArticleRequest = (articleId) => ({
  type: types.FETCH_ARTICLE_REQUEST,
  payload: articleId
});

export const fetchArticleSuccess = (data) => ({
  type: types.FETCH_ARTICLE_SUCCESS,
  payload: data
});

export const fetchArticleFailure = (err) => ({
  type: types.FETCH_ARTICLE_FAILURE,
  payload: err
});

export default (articleId) => {
  return (dispatch) => {
    dispatch(fetchArticleRequest(articleId));
    return axios.get(`${API_URL}articles/${articleId}/`)
      .then(res => {
        dispatch(fetchArticleSuccess(res.data.article));
      })
      .catch(err => {
        dispatch(fetchArticleFailure(err));
      });
  };
};