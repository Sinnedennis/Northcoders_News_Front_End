import { expect } from 'chai';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import getArticleById, {
  getArticleByIdRequest,
  getArticleByIdSuccess,
  getArticleByIdFailure
} from '../../src/actions/getArticleById';

import { API_URL } from '../../src/config';

const mockStore = configureMockStore([thunk]);

describe('#articleById', () => {

  afterEach(() => {
    nock.cleanAll();
  });

  it('dispatches FETCH_ARTICLE_SUCCESS when receiving data', () => {

    const articleId = '5a3144bfb2a0c121973f65ed';

    const article = {
      title: 'Article title'
    };

    nock(API_URL)
      .get(`/articles/${articleId}/`)
      .reply(200, { article });


    const expectedActions = [
      getArticleByIdRequest(articleId),
      getArticleByIdSuccess(article)
    ];
    const store = mockStore();

    return store.dispatch(getArticleById(articleId))
      .then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
  });

  it('dispatches FETCH_ARTICLE_FAILURE when given bad ID data', () => {

    const articleId = 'banana';
    const error = 'failed message request';

    nock(API_URL)
      .get(`/articles/${articleId}/`)
      .replyWithError({ message: error });

    const expectedActions = [
      getArticleByIdRequest(articleId),
      getArticleByIdFailure(error)
    ];

    const store = mockStore({});

    return store.dispatch(getArticleById(articleId))
      .then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
  });
});
