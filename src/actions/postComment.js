import * as types from './types';
import axios from 'axios';
import { API_URL } from '../config';

export const postCommentRequest = (commentObj) => ({
  type: types.POST_COMMENT_REQUEST,
  payload: commentObj
});

export const postCommentSuccess = (data) => ({
  type: types.POST_COMMENT_SUCCESS,
  payload: data
});

export const postCommentFailure = (err) => ({
  type: types.POST_COMMENT_FAILURE,
  payload: err
});

export default (commentObj) => {
  return (dispatch) => {
    dispatch(postCommentRequest(commentObj));

    const { commentText, belongs_to } = commentObj;
    return axios.post(`${API_URL}articles/${belongs_to}/comments/`, { commentText })
      .then(res => {
        dispatch(postCommentSuccess(res.data));
      })
      .catch(err => {
        dispatch(postCommentFailure(err.message));
      });
  };
};