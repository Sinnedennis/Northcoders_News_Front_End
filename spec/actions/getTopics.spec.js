import { expect } from 'chai';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import getTopics, {
  getTopicsRequest,
  getTopicsSuccess,
  getTopicsFailure
} from '../../src/actions/getTopics';

import { API_URL } from '../../src/config';

const mockStore = configureMockStore([thunk]);

describe('#getTopics', () => {

  afterEach(() => {
    nock.cleanAll();
  });

  it('dispatches GET_TOPICS_SUCCESS when receiving data', () => {

    const topics = [
      { topic: 'Topic 1' },
      { topic: 'Topic 2' },
      { topic: 'Topic 3' },
    ];

    nock(API_URL)
      .get('/topics/')
      .reply(200, topics);


    const expectedActions = [
      getTopicsRequest(),
      getTopicsSuccess(topics)
    ];
    const store = mockStore();

    return store.dispatch(getTopics())
      .then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
  });

  it('dispatches GET_TOPICS_FAILURE when given bad ID data', () => {

    const error = 'failed to get topics';

    nock(API_URL)
      .get('/topics/')
      .replyWithError({ message: error });

    const expectedActions = [
      getTopicsRequest(),
      getTopicsFailure(error)
    ];

    const store = mockStore({});

    return store.dispatch(getTopics())
      .then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
  });
});
