import {combineReducers} from 'redux';

// import getAllArticles  from './getAllArticles.js';
// import getArticleById  from './getArticleById.js';
// import getArticlesByTopic from './getArticlesByTopic';
// import getComments from './getComments';
// import postComment from './postComment';
// import deleteComment from './deleteComment';

import articles from './articles';
import comments from './comments';

import getTopics from './getTopics.js';
import getUser from './getUser';
import putVote from './putVote';

const reducer = combineReducers({
  // articles: getAllArticles,
  // article: getArticleById,
  // articlesByTopic: getArticlesByTopic,
  // comments: getComments,
  // postComment: postComment,
  // deleteComment: deleteComment,

  articles: articles,
  topics: getTopics,
  comments: comments,

  user: getUser,
  voteData: putVote
});

export default reducer;