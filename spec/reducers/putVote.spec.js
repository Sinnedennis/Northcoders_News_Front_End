import { expect } from 'chai';
import putVoteReducer, { getInitialState } from '../../src/reducers/putVote';
import {
  putVoteRequest,
  putVoteSuccess,
  putVoteFailure
} from '../../src/actions/putVote';

describe('#putVote reducer', () => {
  it('returns the previous state if passed unknown action type', () => {

    const badAction = { type: 'banana' };
    const initialState = getInitialState();
    const previouState = putVoteReducer(initialState, badAction);

    expect(previouState).to.eql(initialState);
  });

  it('returns initialState if not passed a state', () => {

    const action = { type: 'action' };
    const initialState = getInitialState();
    const testState = putVoteReducer(undefined, action);
    expect(testState).to.eql(initialState);
  });

  it('returns the appropriate state for PUT_VOTE_REQUEST action', () => {

    const action = putVoteRequest({ vote: 'vote data' });
    const newState = putVoteReducer(undefined, action);

    expect(newState.loading).to.be.true;
    expect(newState.error).to.be.null;
    expect(newState.data).to.eql([]);
  });

  it('returns the appropriate state for PUT_VOTE_SUCCESS action', () => {
    const data = [1, 2, 3, 4];
    const action = putVoteSuccess(data);
    const newState = putVoteReducer(undefined, action);

    expect(newState.loading).to.be.false;
    expect(newState.error).to.be.null;
    expect(newState.data).to.eql(data);
  });

  it('returns the appropriate state for PUT_VOTE_FAILURE action', () => {
    const error = '404 page not found';
    const action = putVoteFailure(error);
    const newState = putVoteReducer(undefined, action);

    expect(newState.loading).to.be.false;
    expect(newState.error).to.eql(error);
    expect(newState.data).to.eql([]);
  });
});