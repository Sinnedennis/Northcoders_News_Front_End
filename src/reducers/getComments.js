import * as types from '../actions/types';

export const getInitialState = () => ({
  loading: false,
  error: null,
  data: []
});

export default (prevState = getInitialState(), action) => {

  switch (action.type) {

  case types.GET_COMMENTS_REQUEST:
    return Object.assign({}, prevState, {
      loading: !prevState.loading,
      error: null,
      data: []
    });

  case types.GET_COMMENTS_SUCCESS:

    var commentCopies = action.payload.map((commentObj) => {
      return Object.assign({}, commentObj);
    });

    return Object.assign({}, prevState, {
      loading: false,
      error: null,
      data: commentCopies
    });

  case types.GET_COMMENTS_FAILURE:
    return Object.assign({}, prevState, {
      loading: false,
      error: action.payload,
      data: []
    });
  default:
    return prevState;
  }
};