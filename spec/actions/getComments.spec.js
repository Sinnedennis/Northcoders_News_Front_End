import { expect } from 'chai';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import getComments, {
  getCommentsRequest,
  getCommentsSuccess,
  getCommentsFailure
} from '../../src/actions/getComments';

import { API_URL } from '../../src/config';

const mockStore = configureMockStore([thunk]);

describe('#articlesByTopic', () => {

  afterEach(() => {
    nock.cleanAll();
  });

  it('dispatches GET_ARTICLE_BY_TOPIC_SUCCESS when receiving data', () => {

    const articleId = '123';

    const comments = [
      { textBody: 'Comment textBody 1' },
      { textBody: 'Comment textBody 2' },
      { textBody: 'Comment textBody 3' },
    ];

    nock(API_URL)
      .get(`/articles/${articleId}/comments/`)
      .reply(200, { comments });


    const expectedActions = [
      getCommentsRequest(articleId),
      getCommentsSuccess(comments)
    ];
    const store = mockStore();

    return store.dispatch(getComments(articleId))
      .then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
  });

  it('dispatches GET_ARTICLE_BY_TOPIC_FAILURE when given bad ID data', () => {

    const articleId = '123';
    const error = 'failed message request';

    nock(API_URL)
      .get(`/articles/${articleId}/comments/`)
      .replyWithError({ message: error });

    const expectedActions = [
      getCommentsRequest(articleId),
      getCommentsFailure(error)
    ];

    const store = mockStore({});

    return store.dispatch(getComments(articleId))
      .then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
  });
});
