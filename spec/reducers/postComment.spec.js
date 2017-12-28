import { expect } from 'chai';
import postCommentReducer, { getInitialState } from '../../src/reducers/postComment';
import {
  postCommentRequest,
  postCommentSuccess,
  postCommentFailure
} from '../../src/actions/postComment';

describe('#postComment reducer', () => {
  it('returns the previous state if passed unknown action type', () => {

    const badAction = { type: 'banana' };
    const initialState = getInitialState();
    const previouState = postCommentReducer(initialState, badAction);

    expect(previouState).to.eql(initialState);
  });

  it('returns initialState if not passed a state', () => {

    const action = { type: 'action' };
    const initialState = getInitialState();
    const testState = postCommentReducer(undefined, action);
    expect(testState).to.eql(initialState);
  });

  it('returns the appropriate state for POST_COMMENT_REQUEST action', () => {

    const action = postCommentRequest('example comment body');
    const newState = postCommentReducer(undefined, action);

    expect(newState.loading).to.be.true;
    expect(newState.error).to.be.null;
    expect(newState.data).to.eql([]);
  });

  it('returns the appropriate state for POST_COMMENT_SUCCESS action', () => {
    const data = [1, 2, 3, 4];
    const action = postCommentSuccess(data);
    const newState = postCommentReducer(undefined, action);

    expect(newState.loading).to.be.false;
    expect(newState.error).to.be.null;
    expect(newState.data).to.eql(data);
  });

  it('returns the appropriate state for POST_COMMENT_FAILURE action', () => {
    const error = '404 page not found';
    const action = postCommentFailure(error);
    const newState = postCommentReducer(undefined, action);

    expect(newState.loading).to.be.false;
    expect(newState.error).to.eql(error);
    expect(newState.data).to.eql([]);
  });
});