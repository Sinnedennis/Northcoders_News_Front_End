import * as types from '../actions/types';

export const getInitialState = () => ({
  loading: false,
  error: null,
  data: []
});

export default (prevState = getInitialState(), action) => {
  switch (action.type) {

    case types.GET_ALL_ARTICLES_REQUEST:
    case types.GET_ARTICLE_BY_ID_REQUEST:
    case types.GET_ARTICLES_BY_TOPIC_REQUEST:
      return Object.assign({}, prevState, {
        loading: true,
        error: null,
        data: []
      });


    case types.GET_ALL_ARTICLES_SUCCESS:
    case types.GET_ARTICLE_BY_ID_SUCCESS:
    case types.GET_ARTICLES_BY_TOPIC_SUCCESS:
      return Object.assign({}, prevState, {
        loading: false,
        error: null,
        data: action.payload
      });

    case types.GET_ALL_ARTICLES_FAILURE:
    case types.GET_ARTICLE_BY_ID_FAILURE:
    case types.GET_ARTICLES_BY_TOPIC_FAILURE:
      return Object.assign({}, prevState, {
        loading: false,
        error: action.payload,
        data: []
      });

    default:
      return prevState;
  }
};