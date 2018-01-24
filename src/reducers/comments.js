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
    var notDeletedComments = prevState.comments.filter(comment => String(comment._id) !== String(action.payload));
    var notDeletedCommentsCopy = notDeletedComments.map(comment => Object.assign({}, comment));

    return Object.assign({}, prevState, {
      loading: false,
      error: null,
      comments: notDeletedCommentsCopy
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
    var commentCopies = action.payload.slice().map(comment => {
      return Object.assign({}, comment);
    });
    
    return Object.assign({}, prevState, {
      loading: false,
      error: null,
      comments: commentCopies
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