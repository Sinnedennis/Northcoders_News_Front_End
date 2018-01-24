import {combineReducers} from 'redux';

import articles from './articles';
import comments from './comments';
import topics from './topics';
import putVote from './putVote';
import user from './user';

const reducer = combineReducers({
  articles: articles,
  topics: topics,
  comments: comments,
  user: user,
  voteData: putVote
});

export default reducer;