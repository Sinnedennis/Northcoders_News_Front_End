import * as types from './types';
import axios from 'axios';
import API_URL from './API_URL';

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
        console.log('ACTION CREATOR');
        return axios.put(`${API_URL}${target}/${id}?vote=${vote}`)
            .then(res => {
                console.log('RESPONSE RECEIVED');
                dispatch(putVoteSuccess(res.data));
            })
            .catch(err => {
                dispatch(putVoteFailure(err));
            })
    };
};