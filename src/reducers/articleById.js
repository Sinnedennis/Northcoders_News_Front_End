import * as types from '../actions/types';

export const getInitialState = () => ({
  loading: true,
  error: null,
  data: []
});

export default (prevState = getInitialState(), action) => {
  switch (action.type) {
  case types.FETCH_ARTICLE_REQUEST:
    return Object.assign({}, prevState, {
      loading: true,
      error: null,
      data: []
    });

  case types.FETCH_ARTICLE_SUCCESS:
    return Object.assign({}, prevState, {
      loading: false,
      error: null,
      data: action.payload
    });

  case types.FETCH_ARTICLE_FAILURE:
    return Object.assign({}, prevState, {
      loading: false,
      error: action.payload,
      data: []
    });
  default:
    return prevState;
  }
};