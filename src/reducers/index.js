import {combineReducers} from 'redux';

import articles from './articles';
import comments from './comments';
import topics from './topics';
import vote from './vote';
import user from './user';

const reducer = combineReducers({
  articles,
  topics,
  comments,
  user,
  vote
});

export default reducer;