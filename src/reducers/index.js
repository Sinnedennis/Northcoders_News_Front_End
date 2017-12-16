import {combineReducers} from 'redux';
import articlesReducer  from './articles.js';


const reducer = combineReducers({
  articles: articlesReducer
});

export default reducer;