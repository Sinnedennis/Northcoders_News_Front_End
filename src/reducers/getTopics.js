import * as types from '../actions/types';

export const getInitialState = () => ({
  loading: true,
  error: null,
  data: []
});

export default (prevState = getInitialState(), action) => {
  switch (action.type) {
  case types.GET_TOPICS_REQUEST:
    var requiresLoad = prevState.data.length > 0 ? false : true;
    return Object.assign({}, prevState, {
      loading: requiresLoad,
      error: null,
    });

  case types.GET_TOPICS_SUCCESS:
    var topicsCopy = action.payload.slice().map(topic => {
      return Object.assign({}, topic);
    });

    return Object.assign({}, prevState, {
      loading: false,
      error: null,
      data: topicsCopy
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