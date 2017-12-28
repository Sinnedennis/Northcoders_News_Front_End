import { expect } from 'chai';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import getAllArticles, {
  getAllArticlesRequest,
  getAllArticlesSuccess,
  getAllArticlesFailure
} from '../../src/actions/getAllArticles';

import { API_URL } from '../../src/config';

const mockStore = configureMockStore([thunk]);

describe('#getAllArticles', () => {

  afterEach(() => {
    nock.cleanAll();
  });

  it('dispatches GET_ALL_ARTICLES_SUCCESS when receiving data', () => {

    const articles = [
      { title: 'article 1' },
      { title: 'article 2' }
    ];

    nock(API_URL)
      .get('/articles/')
      .reply(200, { articles });


    const expectedActions = [
      getAllArticlesRequest(),
      getAllArticlesSuccess(articles)
    ];
    const store = mockStore();

    return store.dispatch(getAllArticles())
      .then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
  });

  it('dispatches GET_ALL_ARTICLES_FAILURE when receiving error', () => {

    const error = 'failed message request';

    nock(API_URL)
      .get('/articles/')
      .replyWithError({ message: error });

    const expectedActions = [
      getAllArticlesRequest(),
      getAllArticlesFailure(error)
    ];

    const store = mockStore({});

    return store.dispatch(getAllArticles())
      .then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
  });
});
