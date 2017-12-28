import { expect } from 'chai';
import deleteCommentReducer, { getInitialState } from '../../src/reducers/deleteComment';
import {
  deleteCommentRequest,
  deleteCommentSuccess,
  deleteCommentFailure
} from '../../src/actions/deleteComment';

describe.only('#deleteComment reducer', () => {
  it('returns the previous state if passed unknown action type', () => {

    const badAction = { type: 'banana' };
    const initialState = getInitialState();
    const previouState = deleteCommentReducer(initialState, badAction);

    expect(previouState).to.eql(initialState);
  });

  it('returns initialState if not passed a state', () => {

    const action = { type: 'action' };
    const initialState = getInitialState();
    const testState = deleteCommentReducer(undefined, action);
    expect(testState).to.eql(initialState);
  });

  it('returns the appropriate state for DELETE_COMMENT_REQUEST action', () => {

    const action = deleteCommentRequest('commentId');
    const newState = deleteCommentReducer(undefined, action);

    expect(newState.loading).to.be.true;
    expect(newState.error).to.be.null;
    expect(newState.data).to.eql([]);
  });

  it('returns the appropriate state for DELETE_COMMENT_SUCCESS action', () => {
    const comment = { comment: 'hello' };
    const action = deleteCommentSuccess(comment);
    const newState = deleteCommentReducer(undefined, action);

    expect(newState.loading).to.be.false;
    expect(newState.error).to.be.null;
    expect(newState.data).to.eql({ comment: 'hello' });
  });

  it('returns the appropriate state for DELETE_COMMENT_FAILURE action', () => {
    const error = '404 page not found';
    const action = deleteCommentFailure(error);
    const newState = deleteCommentReducer(undefined, action);

    expect(newState.loading).to.be.false;
    expect(newState.error).to.eql(error);
    expect(newState.data).to.eql([]);
  });
});