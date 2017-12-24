import * as types from '../actions/types';

export const getInitialState = () => ({
  loading: false,
  error: null,
  data: []
});

export default (prevState = getInitialState(), action) => {

  console.log();

  switch (action.type) {

    case types.FETCH_COMMENTS_REQUEST:
      return Object.assign({}, prevState, {
        loading: !prevState.loading,
        error: null,
        data: []
      });

      case types.FETCH_COMMENTS_SUCCESS:

      const commentCopies = action.payload.map((commentObj) => {
        return Object.assign({}, commentObj);
      })

      return Object.assign({}, prevState, {
        loading: false,
        error: null,
        data: commentCopies
      });

      case types.FETCH_COMMENTS_FAILURE:
      return Object.assign({}, prevState, {
        loading: false,
        error: action.payload,
        data: []
      });
    default:
      return prevState;
  }
}