import {combineReducers} from 'redux';

import getAllArticles  from './getAllArticles.js';
import getArticleById  from './getArticleById.js';
import getTopics from './getTopics.js';
import getArticlesByTopic from './getArticlesByTopic';
import getComments from './getComments';
import getUser from './getUser';
import putVote from './putVote';
import postComment from './postComment';
import deleteComment from './deleteComment';

const reducer = combineReducers({
  articles: getAllArticles,
  article: getArticleById,
  topics: getTopics,
  articlesByTopic: getArticlesByTopic,
  comments: getComments,
  user: getUser,
  voteData: putVote,
  postComment: postComment,
  deleteComment: deleteComment
});

export default reducer;