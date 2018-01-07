import * as types from '../actions/types';

export const getInitialState = () => ({
  loading: true,
  error: null,
  data: []
});

export default (prevState = getInitialState(), action) => {
  switch (action.type) {
  case types.GET_TOPICS_REQUEST:
    return Object.assign({}, prevState, {
      loading: true,
      error: null,
      data: []
    });

  case types.GET_TOPICS_SUCCESS:
    return Object.assign({}, prevState, {
      loading: false,
      error: null,
      data: action.payload
    });

  case types.GET_TOPICS_FAILURE:
    return Object.assign({}, prevState, {
      loading: false,
      error: action.payload,
      data: []
    });
  default:
    return prevState;
  }
};