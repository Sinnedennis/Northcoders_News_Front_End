import {combineReducers} from 'redux';

// import getAllArticles  from './getAllArticles.js';
// import getArticleById  from './getArticleById.js';
// import getArticlesByTopic from './getArticlesByTopic';

import articles from './articles';

import getTopics from './getTopics.js';
import getComments from './getComments';
import getUser from './getUser';
import putVote from './putVote';
import postComment from './postComment';
import deleteComment from './deleteComment';

const reducer = combineReducers({
  // articles: getAllArticles,
  // article: getArticleById,
  // articlesByTopic: getArticlesByTopic,
  articles: articles,
  topics: getTopics,
  comments: getComments,
  user: getUser,
  voteData: putVote,
  postComment: postComment,
  deleteComment: deleteComment
});

export default reducer;