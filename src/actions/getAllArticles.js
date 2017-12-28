import * as types from './types';
import axios from 'axios';
import { API_URL } from '../config';

export const getAllArticlesRequest = () => ({
  type: types.GET_ALL_ARTICLES_REQUEST
});

export const getAllArticlesSuccess = (data) => ({
  type: types.GET_ALL_ARTICLES_SUCCESS,
  payload: data
});

export const getAllArticlesFailure = (err) => ({
  type: types.GET_ALL_ARTICLES_FAILURE,
  payload: err
});

export default () => {
  return (dispatch) => {
    dispatch(getAllArticlesRequest());
    return axios.get(`${API_URL}articles/`)
      .then(res => {
        dispatch(getAllArticlesSuccess(res.data.articles));
      })
      .catch(err => {
        dispatch(getAllArticlesFailure(err.message));
      });
  };
};