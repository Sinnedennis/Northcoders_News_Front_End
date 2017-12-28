import { expect } from 'chai';
import getUserReducer, { getInitialState } from '../../src/reducers/getUser';
import {
  getUserRequest,
  getUserSuccess,
  getUserFailure
} from '../../src/actions/getUser';

describe('#getUser reducer', () => {
  it('returns the previous state if passed unknown action type', () => {

    const badAction = { type: 'banana' };
    const initialState = getInitialState();
    const previouState = getUserReducer(initialState, badAction);

    expect(previouState).to.eql(initialState);
  });

  it('returns initialState if not passed a state', () => {

    const action = { type: 'action' };
    const initialState = getInitialState();
    const testState = getUserReducer(undefined, action);
    expect(testState).to.eql(initialState);
  });

  it('returns the appropriate state for GET_USER_REQUEST action', () => {

    const action = getUserRequest('example username');
    const newState = getUserReducer(undefined, action);

    expect(newState.loading).to.be.true;
    expect(newState.error).to.be.null;
    expect(newState.data).to.eql([]);
  });

  it('returns the appropriate state for GET_USER_SUCCESS action', () => {
    const data = [1, 2, 3, 4];
    const action = getUserSuccess(data);
    const newState = getUserReducer(undefined, action);

    expect(newState.loading).to.be.false;
    expect(newState.error).to.be.null;
    expect(newState.data).to.eql(data);
  });

  it('returns the appropriate state for GET_USER_FAILURE action', () => {
    const error = '404 page not found';
    const action = getUserFailure(error);
    const newState = getUserReducer(undefined, action);

    expect(newState.loading).to.be.false;
    expect(newState.error).to.eql(error);
    expect(newState.data).to.eql([]);
  });
});