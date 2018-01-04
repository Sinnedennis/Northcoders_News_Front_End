import * as types from '../actions/types';

export const getInitialState = () => ({
  loading: false,
  error: null,
  data: []
});

export default (prevState = getInitialState(), action) => {

  switch (action.type) {

  case types.GET_COMMENTS_REQUEST:
  case types.POST_COMMENT_REQUEST:
  case types.DELETE_COMMENT_REQUEST:
    return Object.assign({}, prevState, {
      loading: true,
      error: null,
      data: []
    });

  case types.GET_COMMENTS_SUCCESS:
  case types.POST_COMMENT_SUCCESS:
  case types.DELETE_COMMENT_SUCCESS:
    return Object.assign({}, prevState, {
      loading: false,
      error: null,
      data: action.payload
    });

  case types.GET_COMMENTS_FAILURE:
  case types.POST_COMMENT_FAILURE:
  case types.DELETE_COMMENT_FAILURE:
    return Object.assign({}, prevState, {
      loading: false,
      error: action.payload,
      data: []
    });
  default:
    return prevState;
  }
};