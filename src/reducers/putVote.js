import * as types from '../actions/types';

export const getInitialState = () => ({
  loading: false,
  error: null,
  data: []
});

export default (prevState = getInitialState(), action) => {
  switch (action.type) {
    case types.PUT_VOTE_REQUEST:
      return Object.assign({}, prevState, {
        loading: true,
        error: null,
        data: []
      });

      case types.PUT_VOTE_SUCCESS:
      console.log('000000000000000000000000000000000000000');
      console.log(action.payload);
      console.log(JSON.stringify(action.payload));

      //Maybe because I'm changing everything. Maybe I should only change what's needed

      const payload = Object.assign({}, action.payload)
      const votedData = Object.assign({}, action.payload.votedData);
      payload.votedData = votedData;
      console.log(payload.votedData === action.payload.votedData);

      return Object.assign({}, prevState, {
        loading: false,
        error: null,
        data: payload
      });

      case types.PUT_VOTE_FAILURE:
      return Object.assign({}, prevState, {
        loading: false,
        error: action.payload,
        data: []
      });
    default:
      return prevState;
  }
}