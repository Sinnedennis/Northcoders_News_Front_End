import {combineReducers} from 'redux';
import articlesReducer  from './articles.js';
import topicsReducer from './topics.js';
import articlesByTopicReducer from './articlesByTopic';


const reducer = combineReducers({
  articles: articlesReducer,
  topics: topicsReducer,
  articlesByTopic: articlesByTopicReducer
});

export default reducer;