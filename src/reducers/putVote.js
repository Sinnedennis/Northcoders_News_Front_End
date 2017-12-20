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
      return Object.assign({}, prevState, {
        loading: false,
        error: null,
        data: action.payload
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