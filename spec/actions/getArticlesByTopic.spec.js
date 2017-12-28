import { expect } from 'chai';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import getArticlesByTopic, {
  getArticlesByTopicRequest,
  getArticlesByTopicSuccess,
  getArticlesByTopicFailure
} from '../../src/actions/getArticlesByTopic';

import { API_URL } from '../../src/config';

const mockStore = configureMockStore([thunk]);

describe('#articlesByTopic', () => {

  afterEach(() => {
    nock.cleanAll();
  });

  it('dispatches GET_ARTICLE_BY_TOPIC_SUCCESS when receiving data', () => {

    const topicId = 'football123';

    const articles = [
      { title: 'Article title 1' },
      { title: 'Article title 2' },
      { title: 'Article title 3' },
    ];

    nock(API_URL)
      .get(`/topics/${topicId}/articles/`)
      .reply(200, articles);


    const expectedActions = [
      getArticlesByTopicRequest(topicId),
      getArticlesByTopicSuccess(articles)
    ];
    const store = mockStore();

    return store.dispatch(getArticlesByTopic(topicId))
      .then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
  });

  it('dispatches GET_ARTICLE_BY_TOPIC_FAILURE when given bad ID data', () => {

    const topicId = 'football123';
    const error = 'failed message request';

    nock(API_URL)
      .get(`/topics/${topicId}/articles/`)
      .replyWithError({ message: error });

    const expectedActions = [
      getArticlesByTopicRequest(topicId),
      getArticlesByTopicFailure(error)
    ];

    const store = mockStore({});

    return store.dispatch(getArticlesByTopic(topicId))
      .then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
  });
});
