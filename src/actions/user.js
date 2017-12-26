import * as types from './types';
import axios from 'axios';
import { API_URL } from '../config';

export const fetchUserRequest = (userName) => ({
  type: types.FETCH_USER_REQUEST,
  payload: userName
});

export const fetchUserSuccess = (data) => ({
  type: types.FETCH_USER_SUCCESS,
  payload: data
});

export const fetchUserFailure = (err) => ({
  type: types.FETCH_USER_FAILURE,
  payload: err
});

export default (userName) => {
  return (dispatch) => {
    dispatch(fetchUserRequest(userName));
    return axios.get(`${API_URL}users/${userName}`)
      .then(res => {
        dispatch(fetchUserSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchUserFailure(err));
      });
  };
};