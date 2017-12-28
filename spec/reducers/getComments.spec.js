import { expect } from 'chai';
import getCommentsReducer, { getInitialState } from '../../src/reducers/getComments';
import {
  getCommentsRequest,
  getCommentsSuccess,
  getCommentsFailure
} from '../../src/actions/getComments';

describe('#getComments reducer', () => {
  it('returns the previous state if passed unknown action type', () => {

    const badAction = { type: 'banana' };
    const initialState = getInitialState();
    const previouState = getCommentsReducer(initialState, badAction);

    expect(previouState).to.eql(initialState);
  });

  it('returns initialState if not passed a state', () => {

    const action = { type: 'action' };
    const initialState = getInitialState();
    const testState = getCommentsReducer(undefined, action);
    expect(testState).to.eql(initialState);
  });

  it('returns the appropriate state for GET_COMMENTS_REQUEST action', () => {

    const action = getCommentsRequest();
    const newState = getCommentsReducer(undefined, action);

    expect(newState.loading).to.be.true;
    expect(newState.error).to.be.null;
    expect(newState.data).to.eql([]);
  });

  it('returns the appropriate state for GET_COMMENTS_SUCCESS action', () => {
    const data = [1, 2, 3, 4];
    const action = getCommentsSuccess(data);
    const newState = getCommentsReducer(undefined, action);

    expect(newState.loading).to.be.false;
    expect(newState.error).to.be.null;
    expect(newState.data).to.eql(data);
  });

  it('returns the appropriate state for GET_COMMENTS_FAILURE action', () => {
    const error = '404 page not found';
    const action = getCommentsFailure(error);
    const newState = getCommentsReducer(undefined, action);

    expect(newState.loading).to.be.false;
    expect(newState.error).to.eql(error);
    expect(newState.data).to.eql([]);
  });
});