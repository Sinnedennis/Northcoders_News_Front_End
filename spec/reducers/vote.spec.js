import { expect } from 'chai';
import voteReducer, { getInitialState } from '../../src/reducers/vote';
import {
  putVoteRequest,
  putVoteSuccess,
  putVoteFailure
} from '../../src/actions/putVote';

describe('#voteReducer', () => {

  describe('Basic behaviours', () => {
    it('returns the previous state if passed unknown action type', () => {

      const badAction = { type: 'banana' };
      const initialState = getInitialState();
      const previouState = voteReducer(initialState, badAction);

      expect(previouState).to.eql(initialState);
    });

    it('returns initialState if not passed a state', () => {

      const action = { type: 'action' };
      const initialState = getInitialState();
      const testState = voteReducer(undefined, action);
      expect(testState).to.eql(initialState);
    });
  });


  describe('#putVote', () => {
    it('returns the appropriate state for PUT_VOTE_REQUEST action', () => {
      const action = putVoteRequest({ vote: 'vote data' });
      const newState = voteReducer(undefined, action);

      expect(newState.loading).to.be.true;
      expect(newState.error).to.be.null;
      expect(newState.data).to.eql([]);
    });

    it('returns the appropriate state for PUT_VOTE_SUCCESS action', () => {
      const data = { _id: 'abc', votes: 10 };
      const action = putVoteSuccess(data);
      const newState = voteReducer(undefined, action);

      expect(newState.loading).to.be.false;
      expect(newState.error).to.be.null;
      expect(newState.data).to.eql(data);
    });

    it('Does not pass payload by reference', () => {
      const voteData = { _id: 'abc', votes: 10 };
      const action = putVoteSuccess(voteData);
      const prevState = {
        data: voteData
      };
      const newState = voteReducer(prevState, action);

      expect(newState.data).to.eql(prevState.data);
      expect(newState.data).to.not.equal(prevState.data);
    });

    it('returns the appropriate state for PUT_VOTE_FAILURE action', () => {
      const error = 'I have no strong feelings one way or the other';
      const action = putVoteFailure(error);
      const newState = voteReducer(undefined, action);

      expect(newState.loading).to.be.false;
      expect(newState.error).to.eql(error);
      expect(newState.data).to.eql([]);
    });
  });
});