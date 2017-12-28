import { expect } from 'chai';
import getTopicsReducer, { getInitialState } from '../../src/reducers/getTopics';
import {
  getTopicsRequest,
  getTopicsSuccess,
  getTopicsFailure
} from '../../src/actions/getTopics';

describe('#getTopics reducer', () => {
  it('returns the previous state if passed unknown action type', () => {

    const badAction = { type: 'banana' };
    const initialState = getInitialState();
    const previouState = getTopicsReducer(initialState, badAction);

    expect(previouState).to.eql(initialState);
  });

  it('returns initialState if not passed a state', () => {

    const action = { type: 'action' };
    const initialState = getInitialState();
    const testState = getTopicsReducer(undefined, action);
    expect(testState).to.eql(initialState);
  });

  it('returns the appropriate state for GET_TOPICS_REQUEST action', () => {

    const action = getTopicsRequest();
    const newState = getTopicsReducer(undefined, action);

    expect(newState.loading).to.be.true;
    expect(newState.error).to.be.null;
    expect(newState.data).to.eql([]);
  });

  it('returns the appropriate state for GET_TOPICS_SUCCESS action', () => {
    const data = [1, 2, 3, 4];
    const action = getTopicsSuccess(data);
    const newState = getTopicsReducer(undefined, action);

    expect(newState.loading).to.be.false;
    expect(newState.error).to.be.null;
    expect(newState.data).to.eql(data);
  });

  it('returns the appropriate state for GET_TOPICS_FAILURE action', () => {
    const error = '404 page not found';
    const action = getTopicsFailure(error);
    const newState = getTopicsReducer(undefined, action);

    expect(newState.loading).to.be.false;
    expect(newState.error).to.eql(error);
    expect(newState.data).to.eql([]);
  });
});