import { expect } from 'chai';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import articleById, {
  fetchArticleRequest,
  fetchArticleSuccess,
  fetchArticleFailure
} from '../../src/actions/articleById';

import { API_URL } from '../../src/config';

const mockStore = configureMockStore([thunk]);

describe.only('#articleById', () => {
  afterEach(() => {
    nock.cleanAll();
  });
  describe('', () => {
    it('dispatches FETCH_ARTICLE_SUCCESS when receiving data', () => {

      const articleId = '5a3144bfb2a0c121973f65ed';

      const article = {
        title: 'Article title'
      }

      nock(API_URL)
        .get(`/articles/${articleId}/`)
        .reply(200, { article })


      const expectedActions = [
        fetchArticleRequest(articleId),
        fetchArticleSuccess(article)
      ]
      const store = mockStore();

      return store.dispatch(articleById(articleId))
        .then(() => {
          expect(store.getActions()).to.eql(expectedActions);
        })
    })
  })
})
