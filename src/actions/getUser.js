import * as types from './types';
import axios from 'axios';
import { API_URL } from '../config';

export const getUserRequest = (userName) => ({
  type: types.GET_USER_REQUEST,
  payload: userName
});

export const getUserSuccess = (data) => ({
  type: types.GET_USER_SUCCESS,
  payload: data
});

export const getUserFailure = (err) => ({
  type: types.GET_USER_FAILURE,
  payload: err
});

export default (userName) => {
  return (dispatch) => {
    dispatch(getUserRequest(userName));
    return axios.get(`${API_URL}users/${userName}/`)
      .then(res => {
        dispatch(getUserSuccess(res.data));
      })
      .catch(err => {
        dispatch(getUserFailure(err.message));
      });
  };
};