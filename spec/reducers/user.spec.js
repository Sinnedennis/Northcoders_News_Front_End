import { expect } from 'chai';
import userReducer, { getInitialState } from '../../src/reducers/user';
import {
  getUserRequest,
  getUserSuccess,
  getUserFailure
} from '../../src/actions/getUser';

describe('#getUser reducer', () => {
  describe('Basic behaviours', () => {
    it('returns the previous state if passed unknown action type', () => {

      const badAction = { type: 'banana' };
      const initialState = getInitialState();
      const previouState = userReducer(initialState, badAction);

      expect(previouState).to.eql(initialState);
    });

    it('returns initialState if not passed a state', () => {

      const action = { type: 'action' };
      const initialState = getInitialState();
      const testState = userReducer(undefined, action);
      expect(testState).to.eql(initialState);
    });
  });

  describe('#getUser', () => {

    it('returns the appropriate state for GET_USER_REQUEST action', () => {

      const action = getUserRequest('example username');
      const newState = userReducer(undefined, action);

      expect(newState.loading).to.be.true;
      expect(newState.error).to.be.null;
      expect(newState.data).to.eql({});
    });

    it('returns the appropriate state for GET_USER_SUCCESS action', () => {
      const data = { userName: 'Boz' };
      const action = getUserSuccess(data);
      const newState = userReducer(undefined, action);

      expect(newState.loading).to.be.false;
      expect(newState.error).to.be.null;
      expect(newState.data).to.eql(data);
    });

    it('Does not pass payload by reference', () => {
      const user = { userName: 'barry' };
      const action = getUserSuccess(user);
      const prevState = {
        data: user
      };
      const newState = userReducer(prevState, action);

      expect(newState.data).to.eql(prevState.data);
      expect(newState.data).to.not.equal(prevState.data);
    });

    it('returns the appropriate state for GET_USER_FAILURE action', () => {
      const error = '404 page not found';
      const action = getUserFailure(error);
      const newState = userReducer(undefined, action);

      expect(newState.loading).to.be.false;
      expect(newState.error).to.eql(error);
      expect(newState.data).to.eql({});
    });
  });
});