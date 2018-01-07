import * as types from './types';
import axios from 'axios';
import { API_URL } from '../config';

export const getArticleByIdRequest = (articleId) => ({
  type: types.GET_ARTICLE_BY_ID_REQUEST,
});

export const getArticleByIdSuccess = (data) => ({
  type: types.GET_ARTICLE_BY_ID_SUCCESS,
  payload: data
});

export const getArticleByIdFailure = (err) => ({
  type: types.GET_ARTICLE_BY_ID_FAILURE,
  payload: err
});

export default (articleId) => {
  return (dispatch) => {
    dispatch(getArticleByIdRequest(articleId));
    return axios.get(`${API_URL}articles/${articleId}/`)
      .then(res => {
        dispatch(getArticleByIdSuccess(res.data.article));
      })
      .catch(err => {
        dispatch(getArticleByIdFailure(err.message));
      });
  };
};