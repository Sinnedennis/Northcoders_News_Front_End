import { expect } from 'chai';
import articleReducer, { getInitialState } from '../../src/reducers/articles';
import {
  getArticleByIdRequest,
  getArticleByIdSuccess,
  getArticleByIdFailure
} from '../../src/actions/getArticleById';

import {
  getAllArticlesRequest,
  getAllArticlesSuccess,
  getAllArticlesFailure
} from '../../src/actions/getAllArticles';

import {
  getArticlesByTopicRequest,
  getArticlesByTopicSuccess,
  getArticlesByTopicFailure
} from '../../src/actions/getArticlesByTopic';

import { putVoteRequest } from '../../src/actions/putVote';

describe('#articles reducer', () => {

  describe('Basic behaviours', () => {
    it('returns the previous state if passed unknown action type', () => {

      const badAction = { type: 'banana' };
      const initialState = getInitialState();
      const previouState = articleReducer(initialState, badAction);

      expect(previouState).to.eql(initialState);
    });

    it('returns initialState if not passed a state', () => {

      const action = { type: 'action' };
      const initialState = getInitialState();
      const testState = articleReducer(undefined, action);
      expect(testState).to.eql(initialState);
    });
  });


  describe('#getAllArticles', () => {
    it('returns the appropriate state for GET_ALL_ARTICLES_REQUEST action', () => {

      const action = getAllArticlesRequest();
      const newState = articleReducer(undefined, action);

      expect(newState.loadingAll).to.be.true;
      expect(newState.error).to.be.null;
      expect(newState.allArticles).to.eql([]);
    });

    it('returns the appropriate state for GET_ALL_ARTICLES_SUCCESS action', () => {
      const data = [{ data: 'hello' }, { moreData: 'hi' }];
      const action = getAllArticlesSuccess(data);
      const newState = articleReducer(undefined, action);

      expect(newState.loadingAll).to.be.false;
      expect(newState.error).to.be.null;
      expect(newState.allArticles).to.eql(data);
    });

    it('Does not pass payload by reference', () => {
      const data = [{ data: 'hello' }, { moreData: 'hi' }];
      const action = getAllArticlesSuccess(data);
      const newState = articleReducer(undefined, action);

      expect(newState.loadingAll).to.be.false;
      expect(newState.error).to.be.null;
      expect(newState.allArticles).to.eql(data);
      expect(newState.allArticles).to.not.equal(data);
      expect(newState.allArticles[0]).to.not.equal(data[0]);
    });

    it('returns the appropriate state for GET_ALL_ARTICLES_FAILURE action', () => {
      const error = '404 page not found';
      const action = getAllArticlesFailure(error);
      const newState = articleReducer(undefined, action);

      expect(newState.loadingAll).to.be.false;
      expect(newState.error).to.eql(error);
      expect(newState.allArticles).to.eql([]);
    });
  });


  describe('#getArticlesById', () => {
    it('returns the appropriate state for GET_ARTICLE_BY_ID_REQUEST action', () => {

      const action = getArticleByIdRequest('id: 1234');
      const newState = articleReducer(undefined, action);

      expect(newState.loadingById).to.be.true;
      expect(newState.error).to.be.null;
      expect(newState.oneArticle).to.eql({});
    });

    it('returns the appropriate state for GET_ARTICLE_BY_ID_SUCCESS action', () => {
      const data = { data: 'hello' };
      const action = getArticleByIdSuccess(data);
      const newState = articleReducer(undefined, action);

      expect(newState.loadingById).to.be.false;
      expect(newState.error).to.be.null;
      expect(newState.oneArticle).to.eql(data);
    });

    it('Does not pass payload by reference', () => {
      const data = { data: 'hello' };
      const action = getArticleByIdSuccess(data);
      const newState = articleReducer(undefined, action);

      expect(newState.loadingById).to.be.false;
      expect(newState.error).to.be.null;
      expect(newState.oneArticle).to.eql(data);
      expect(newState.oneArticle).to.not.equal(data);
    });


    it('returns the appropriate state for GET_ARTICLE_BY_ID_FAILURE action', () => {
      const error = '404 page not found';
      const action = getArticleByIdFailure(error);
      const newState = articleReducer(undefined, action);

      expect(newState.loadingById).to.be.false;
      expect(newState.error).to.eql(error);
      expect(newState.oneArticle).to.eql({});
    });
  });

  describe('#getArticlesByTopic', () => {
    it('returns the appropriate state for GET_ARTICLE_BY_TOPIC_REQUEST action', () => {

      const action = getArticlesByTopicRequest('example topic');
      const newState = articleReducer(undefined, action);

      expect(newState.loadingByTopic).to.be.true;
      expect(newState.error).to.be.null;
      expect(newState.articlesByTopic).to.eql([]);
    });

    it('returns the appropriate state for GET_ARTICLE_BY_TOPIC_SUCCESS action', () => {
      const data = [{ data: 'hello' }, { moreData: 'hi' }];
      const action = getArticlesByTopicSuccess(data);
      const newState = articleReducer(undefined, action);

      expect(newState.loadingByTopic).to.be.false;
      expect(newState.error).to.be.null;
      expect(newState.articlesByTopic).to.eql(data);
    });

    it('Does not pass payload by reference', () => {
      const data = [{ data: 'hello' }, { moreData: 'hi' }];
      const action = getArticlesByTopicSuccess(data);
      const newState = articleReducer(undefined, action);

      expect(newState.loadingByTopic).to.be.false;
      expect(newState.error).to.be.null;
      expect(newState.articlesByTopic).to.eql(data);
      expect(newState.articlesByTopic).to.not.equal(data);
    });

    it('returns the appropriate state for GET_ARTICLE_BY_TOPIC_FAILURE action', () => {
      const error = '404 page not found';
      const action = getArticlesByTopicFailure(error);
      const newState = articleReducer(undefined, action);

      expect(newState.loadingByTopic).to.be.false;
      expect(newState.error).to.eql(error);
      expect(newState.articlesByTopic).to.eql([]);
    });
  });

  describe('#putVote', () => {
    it('returns the appropriate state for PUT_VOTE_REQUEST action', () => {
      const action = putVoteRequest('voteMe', 'articles', 'up' );
      const prevState = {
        allArticles:      [{ _id: 'do not vote me', votes: 0 }],
        articlesByTopic:  [{ _id: 'voteMe', votes: 0 }],
        oneArticle:       { _id: 'voteMe', votes: 0 }
      };

      const newState = articleReducer(prevState, action);
      expect(newState.allArticles[0].votes).to.equal(0);
      expect(newState.articlesByTopic[0].votes).to.equal(1);
      expect(newState.oneArticle.votes).to.equal(1);
    });

    it('Does not pass payload by reference', () => {
      const action = putVoteRequest('voteMe', 'articles', 'up' );
      const prevState = {
        allArticles:      [{ _id: 'voteMe', votes: 0 }],
        articlesByTopic:  [{ _id: 'do not vote me', votes: 0 }],
        oneArticle:       { _id: 'do not vote me', votes: 0 }
      };

      const newState = articleReducer(prevState, action);
      expect(newState.allArticles[0].votes).to.equal(1);
      expect(newState.articlesByTopic[0].votes).to.equal(0);
      expect(newState.oneArticle.votes).to.equal(0);

      expect(newState.allArticles[0]).to.not.equal(prevState.allArticles[0]);
      expect(newState.articlesByTopic[0]).to.not.equal(prevState.articlesByTopic[0]);
      expect(newState.oneArticle).to.not.equal(prevState.oneArticle);
    });
  });
});