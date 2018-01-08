import { expect } from 'chai';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import getUser, {
  getUserRequest,
  getUserSuccess,
  getUserFailure
} from '../../src/actions/getUser';

import { API_URL } from '../../src/config';

const mockStore = configureMockStore([thunk]);

describe('#getUser Action', () => {

  afterEach(() => {
    nock.cleanAll();
  });

  it('dispatches GET_USER_SUCCESS when receiving data', () => {

    const userName = 'northcoder';
    const user = { alias: 'Bat Thing' };

    nock(API_URL)
      .get(`/users/${userName}/`)
      .reply(200, user);


    const expectedActions = [
      getUserRequest(userName),
      getUserSuccess(user)
    ];
    const store = mockStore();

    return store.dispatch(getUser(userName))
      .then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
  });

  it('dispatches GET_USER_FAILURE when given bad input data', () => {

    const userName = 'northcoder';
    const error = 'failed to get topics';

    nock(API_URL)
      .get(`/users/${userName}/`)
      .replyWithError({ message: error });

    const expectedActions = [
      getUserRequest(userName),
      getUserFailure(error)
    ];

    const store = mockStore({});

    return store.dispatch(getUser(userName))
      .then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
  });
});
