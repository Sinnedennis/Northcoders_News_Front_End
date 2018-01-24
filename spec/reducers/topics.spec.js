import { expect } from 'chai';
import TopicsReducer, { getInitialState } from '../../src/reducers/topics';
import {
  getTopicsRequest,
  getTopicsSuccess,
  getTopicsFailure
} from '../../src/actions/getTopics';

describe('#getTopics reducer', () => {

  describe('Basic behaviours', () => {
    it('returns the previous state if passed unknown action type', () => {

      const badAction = { type: 'banana' };
      const initialState = getInitialState();
      const previouState = TopicsReducer(initialState, badAction);

      expect(previouState).to.eql(initialState);
    });

    it('returns initialState if not passed a state', () => {

      const action = { type: 'action' };
      const initialState = getInitialState();
      const testState = TopicsReducer(undefined, action);
      expect(testState).to.eql(initialState);
    });
  });

  describe('#getTopics', () => {
    it('returns the appropriate state for GET_TOPICS_REQUEST action', () => {

      const action = getTopicsRequest();
      const newState = TopicsReducer(undefined, action);
  
      expect(newState.loading).to.be.true;
      expect(newState.error).to.be.null;
      expect(newState.data).to.eql([]);
    });

    it('returns the appropriate state for GET_TOPICS_SUCCESS action', () => {
      const data = [{ topic: 'football' }, { topic: 'cooking' }];
      const action = getTopicsSuccess(data);
      const newState = TopicsReducer(undefined, action);

      expect(newState.loading).to.be.false;
      expect(newState.error).to.be.null;
      expect(newState.data).to.eql(data);
    });

    it('Does not pass payload by reference', () => {
      const data = [{ topic: 'football' }, { topic: 'cooking' }];
      const action = getTopicsSuccess(data);
      const prevState = {
        data
      };
      const newState = TopicsReducer(prevState, action);

      expect(newState.data).to.eql(prevState.data);
      expect(newState.data).to.not.equal(prevState.data);
      expect(newState.data[0]).to.not.equal(prevState.data[0]);
      expect(newState.data[1]).to.not.equal(prevState.data[1]);
    });

    it('returns the appropriate state for GET_TOPICS_FAILURE action', () => {
      const error = '404 page not found';
      const action = getTopicsFailure(error);
      const newState = TopicsReducer(undefined, action);

      expect(newState.loading).to.be.false;
      expect(newState.error).to.eql(error);
      expect(newState.data).to.eql([]);
    });
  });
});