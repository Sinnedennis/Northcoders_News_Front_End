import * as types from './types';
import axios from 'axios';
import { API_URL } from '../config';

export const putVoteRequest = (id, target, vote) => ({
  type: types.PUT_VOTE_REQUEST,
  payload: {id, target, vote}
});

export const putVoteSuccess = (data) => ({
  type: types.PUT_VOTE_SUCCESS,
  payload: data
});

export const putVoteFailure = (err) => ({
  type: types.PUT_VOTE_FAILURE,
  payload: err
});

export default (id, target, vote) => {
  return (dispatch) => {
    dispatch(putVoteRequest(id, target, vote));
    return axios.put(`${API_URL}${target}/${id}?vote=${vote}`)
      .then(res => {
        const { votes, _id } = res.data.votedData;
        dispatch(putVoteSuccess( { votes, _id } ));
      })
      .catch(err => {
        dispatch(putVoteFailure(err));
      });
  };
};