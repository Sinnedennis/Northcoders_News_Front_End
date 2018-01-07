import * as types from '../actions/types';
import { updateListVotes } from '../utils';


export const getInitialState = () => ({
  loadingAll: true,
  loadingById: true,
  loadingByTopic: true,
  error: null,
  allArticles: [],
  oneArticle: {},
  articlesByTopic: []
});

export default (prevState = getInitialState(), action) => {
  switch (action.type) {

    case types.GET_ALL_ARTICLES_REQUEST:
      var requiresLoad = prevState.allArticles.length > 0 ? false : true;
      return Object.assign({}, prevState, {
        loadingAll: requiresLoad,
        error: null,
      });

    case types.GET_ARTICLES_BY_TOPIC_REQUEST:
      var requiresLoad = prevState.articlesByTopic.length > 0 ? false : true;
      return Object.assign({}, prevState, {
        loadingByTopic: requiresLoad,
        error: null,
      });

    case types.GET_ARTICLE_BY_ID_REQUEST:
      return Object.assign({}, prevState, {
        loadingById: true,
        error: null,
      });


    case types.GET_ALL_ARTICLES_SUCCESS:
      return Object.assign({}, prevState, {
        loadingAll: false,
        error: null,
        allArticles: action.payload
      });

    case types.GET_ARTICLE_BY_ID_SUCCESS:
      return Object.assign({}, prevState, {
        loadingById: false,
        error: null,
        oneArticle: action.payload
      });

    case types.GET_ARTICLES_BY_TOPIC_SUCCESS:
      return Object.assign({}, prevState, {
        loadingByTopic: false,
        error: null,
        articlesByTopic: action.payload
      });


    case types.GET_ALL_ARTICLES_FAILURE:
      return Object.assign({}, prevState, {
        loadingAll: false,
        error: action.payload,
      });

    case types.GET_ARTICLE_BY_ID_FAILURE:
      return Object.assign({}, prevState, {
        loadingById: false,
        error: action.payload,
      });

    case types.GET_ARTICLES_BY_TOPIC_FAILURE:
      return Object.assign({}, prevState, {
        loadingByTopic: false,
        error: action.payload,
      });


    case types.PUT_VOTE_REQUEST:
      var { id, target, vote } = action.payload;

      if (target !== 'articles') return prevState;

      var allArticlesUpdated = updateListVotes(prevState.allArticles, id, vote);
      var topicArticlesUpdated = updateListVotes(prevState.articlesByTopic, id, vote);
      var oneArticleUpdated = Object.assign({}, prevState.oneArticle);
      oneArticleUpdated.votes += vote === 'up' ? 1 : -1;

      return Object.assign({}, prevState, {
        allArticles: allArticlesUpdated,
        articlesByTopic: topicArticlesUpdated,
        oneArticle: oneArticleUpdated
      });


    default:
      return prevState;
  }
};
