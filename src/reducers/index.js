import {combineReducers} from 'redux';
import articlesReducer  from './articles.js';
import articleByIdReducer  from './articleById.js';
import topicsReducer from './topics.js';
import articlesByTopicReducer from './articlesByTopic';
import commentsReducer from './comments';
import userReducer from './user';
import voteReducer from './putVote';
import postCommentReducer from './postComment';

const reducer = combineReducers({
  articles: articlesReducer,
  article: articleByIdReducer,
  topics: topicsReducer,
  articlesByTopic: articlesByTopicReducer,
  comments: commentsReducer,
  user: userReducer,
  voteData: voteReducer,
  postComment: postCommentReducer
});

export default reducer;