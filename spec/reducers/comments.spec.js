import { expect } from 'chai';
import commentReducer, { getInitialState } from '../../src/reducers/comments';
import { deleteCommentRequest } from '../../src/actions/deleteComment';

import {
  getCommentsRequest,
  getCommentsSuccess,
  getCommentsFailure
} from '../../src/actions/getComments';

import { postCommentRequest } from '../../src/actions/postComment';
import { putVoteRequest } from '../../src/actions/putVote';

describe('#comment reducer', () => {

  describe('Basic behaviours', () => {
    it('returns the previous state if passed unknown action type', () => {

      const badAction = { type: 'banana' };
      const initialState = getInitialState();
      const previouState = commentReducer(initialState, badAction);

      expect(previouState).to.eql(initialState);
    });

    it('returns initialState if not passed a state', () => {

      const action = { type: 'action' };
      const initialState = getInitialState();
      const testState = commentReducer(undefined, action);
      expect(testState).to.eql(initialState);
    });
  });

  describe('#deleteComment', () => {
    it('returns the appropriate state for DELETE_COMMENT_REQUEST action', () => {

      const action = deleteCommentRequest('deleteMe');
      const prevState = {
        comments: [{ _id: 'foo' }, { _id: 'deleteMe' }]
      };
      const newState = commentReducer(prevState, action);

      expect(newState.error).to.be.null;
      expect(newState.comments).to.eql([{ _id: 'foo' }]);
    });

    it('Does not pass payload by reference', () => {

      const action = deleteCommentRequest('deleteMe');
      const prevState = {
        comments: [{ _id: 'foo' }, { _id: 'deleteMe' }]
      };
      const newState = commentReducer(prevState, action);

      expect(newState.error).to.be.null;
      expect(newState.comments).to.eql([{ _id: 'foo' }]);
      expect(newState.comments).to.not.equal(prevState.comments[0]);
    });

  });

  describe('#getComments', () => {
    it('returns the appropriate state for GET_COMMENTS_REQUEST action', () => {

      const action = getCommentsRequest();
      const newState = commentReducer(undefined, action);

      expect(newState.loading).to.be.true;
      expect(newState.error).to.be.null;
      expect(newState.comments).to.eql([]);
    });

    it('returns the appropriate state for GET_COMMENTS_SUCCESS action', () => {
      const data = [{ a: 'a' }, { b: 'b' }, { c: 'c' }];
      const action = getCommentsSuccess(data);
      const newState = commentReducer(undefined, action);

      expect(newState.loading).to.be.false;
      expect(newState.error).to.be.null;
      expect(newState.comments).to.eql(data);
      expect(newState.comments).to.not.equal(data);
      expect(newState.comments[0]).to.not.equal(data[0]);
    });

    it('returns the appropriate state for GET_COMMENTS_FAILURE action', () => {
      const error = '404 page not found';
      const action = getCommentsFailure(error);
      const newState = commentReducer(undefined, action);

      expect(newState.loading).to.be.false;
      expect(newState.error).to.eql(error);
      expect(newState.comments).to.eql([]);
    });
  });

  describe('#postComment', () => {
    it('returns the appropriate state for POST_COMMENT_REQUEST action', () => {

      const exampleComment = { commentText: 'hi', belongs_to: 'cars' };
      const action = postCommentRequest(exampleComment);
      const prevState = {
        comments: [{ _id: 'foo' }, { _id: 'deleteMe' }]
      };
      const newState = commentReducer(prevState, action);

      expect(newState.comments.length).to.equal(prevState.comments.length + 1);
      expect(newState.comments).to.not.equal(prevState.comments);
    });
  });

  describe('#putVote', () => {
    it('returns the appropriate state for POST_COMMENT_REQUEST action', () => {

      const action = putVoteRequest('voteMe', 'comments', 'down');
      const prevState = {
        comments: [{ _id: 'voteMe', votes: 1 }, { _id: 'do not vote me', votes: 1 }]
      };
      const newState = commentReducer(prevState, action);

      expect(newState.comments[0].votes).to.equal(0);
      expect(newState.comments[1].votes).to.equal(prevState.comments[1].votes);
    });

    it('Does not pass payload by reference', () => {

      const action = putVoteRequest('voteMe', 'comments', 'down');
      const prevState = {
        comments: [{ _id: 'voteMe', votes: 1 }, { _id: 'do not vote me', votes: 1 }]
      };
      const newState = commentReducer(prevState, action);

      expect(newState.comments).to.not.equal(prevState.comments);
      expect(newState.comments[0]).to.not.equal(prevState.comments[0]);
      expect(newState.comments[1]).to.not.equal(prevState.comments[1]);
    });
  });
});