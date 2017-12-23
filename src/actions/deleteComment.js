import * as types from './types';
import axios from 'axios';
import { API_URL } from '../config';

export const deleteCommentRequest = (commentObj) => ({
  type: types.DELETE_COMMENT_REQUEST,
  payload: commentObj
});

export const deleteCommentSuccess = (data) => ({
  type: types.DELETE_COMMENT_SUCCESS,
  payload: data
});

export const deleteCommentFailure = (err) => ({
  type: types.DELETE_COMMENT_FAILURE,
  payload: err
});

export default (commentId) => {
  return (dispatch) => {
    dispatch(deleteCommentRequest(commentId));
    
    return axios.delete(`${API_URL}comments/${commentId}`)
      .then(res => {
        dispatch(deleteCommentSuccess(res.data));
      })
      .catch(err => {
        dispatch(deleteCommentFailure(err));
      })
  };
};