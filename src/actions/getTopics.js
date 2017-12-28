import * as types from './types';
import axios from 'axios';
import { API_URL } from '../config';

export const getTopicsRequest = () => ({
  type: types.GET_TOPICS_REQUEST
});

export const getTopicsSuccess = (data) => ({
  type: types.GET_TOPICS_SUCCESS,
  payload: data
});

export const getTopicsFailure = (err) => ({
  type: types.GET_TOPICS_FAILURE,
  payload: err
});

export default () => {
  return (dispatch) => {
    dispatch(getTopicsRequest());
    return axios.get(`${API_URL}topics/`)
      .then(res => {
        dispatch(getTopicsSuccess(res.data));
      })
      .catch(err => {
        dispatch(getTopicsFailure(err));
      });
  };
};