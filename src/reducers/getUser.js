import * as types from '../actions/types';

export const getInitialState = () => ({
  loading: true,
  error: null,
  data: []
});

export default (prevState = getInitialState(), action) => {

  switch (action.type) {
  case types.GET_USER_REQUEST:
    return Object.assign({}, prevState, {
      loading: true,
      error: null,
      data: []
    });

  case types.GET_USER_SUCCESS:
    var userCopy = Object.assign({}, action.payload);
    return Object.assign({}, prevState, {
      loading: false,
      error: null,
      data: userCopy
    });

  case types.GET_USER_FAILURE:
    return Object.assign({}, prevState, {
      loading: false,
      error: action.payload,
      data: []
    });
  default:
    return prevState;
  }
};