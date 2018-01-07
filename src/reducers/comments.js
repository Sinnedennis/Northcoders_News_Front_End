import * as types from '../actions/types';
import { updateListVotes } from '../utils';


export const getInitialState = () => ({
  loading: true,
  error: null,
  comments: []
});

export default (prevState = getInitialState(), action) => {

  switch (action.type) {

  case types.GET_COMMENTS_REQUEST:
    return Object.assign({}, prevState, {
      loading: true,
      error: null,
      comments: []
    });


  case types.DELETE_COMMENT_REQUEST:
    var undeletedComments = prevState.comments.reduce((acc, comment) => {
      if (String(comment._id) !== String(action.payload)) acc.push(Object.assign({}, comment));
      return acc;
    }, []);

    return Object.assign({}, prevState, {
      loading: false,
      error: null,
      comments: undeletedComments
    });


  case types.POST_COMMENT_REQUEST:
    var commentsPlusOne = prevState.comments.map(comment => {
      return Object.assign({}, comment);
    });

    var { commentText, belongs_to } = action.payload;

    var newComment = {
      belongs_to,
      body: commentText,
      created_at: Date.now(),
      _id: Date.now(),
      created_by: 'northcoder',
      votes: 1
    };

    commentsPlusOne.push(newComment);

    return Object.assign({}, prevState, {
      loading: false,
      error: null,
      comments: commentsPlusOne
    });


  case types.GET_COMMENTS_SUCCESS:
    return Object.assign({}, prevState, {
      loading: false,
      error: null,
      comments: action.payload
    });


  case types.GET_COMMENTS_FAILURE:
    return Object.assign({}, prevState, {
      loading: false,
      error: action.payload,
      comments: []
    });

  case types.PUT_VOTE_REQUEST:
    var { id, target, vote } = action.payload;

    if (target !== 'comments') return prevState;

    var allCommentsUpdated = updateListVotes(prevState.comments, id, vote);

    return Object.assign({}, prevState, {
      comments: allCommentsUpdated
    });

  default:
    return prevState;
  }
};