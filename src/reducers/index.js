import {combineReducers} from 'redux';

import articles from './articles';
import comments from './comments';
import topics from './topics.js';
import putVote from './putVote';
import getUser from './getUser';

const reducer = combineReducers({
  articles: articles,
  topics: topics,
  comments: comments,
  user: getUser,
  voteData: putVote
});

export default reducer;