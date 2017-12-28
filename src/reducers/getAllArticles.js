import * as types from '../actions/types';

export const getInitialState = () => ({
  loading: false,
  error: null,
  data: []
});

export default (prevState = getInitialState(), action) => {
  switch (action.type) {
  case types.GET_ALL_ARTICLES_REQUEST:
    return Object.assign({}, prevState, {
      loading: !prevState.loading,
      error: null,
      data: []
    });

  case types.GET_ALL_ARTICLES_SUCCESS:
    return Object.assign({}, prevState, {
      loading: false,
      error: null,
      data: action.payload
    });

  case types.GET_ALL_ARTICLES_FAILURE:
    return Object.assign({}, prevState, {
      loading: false,
      error: action.payload,
      data: []
    });
  default:
    return prevState;
  }
};