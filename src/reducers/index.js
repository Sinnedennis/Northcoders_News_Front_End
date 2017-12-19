import {combineReducers} from 'redux';
import articlesReducer  from './articles.js';
import articleByIdReducer  from './articleById.js';
import topicsReducer from './topics.js';
import articlesByTopicReducer from './articlesByTopic';
import commentsReducer from './comments';

const reducer = combineReducers({
  articles: articlesReducer,
  article: articleByIdReducer,
  topics: topicsReducer,
  articlesByTopic: articlesByTopicReducer,
  comments: commentsReducer
});

export default reducer;