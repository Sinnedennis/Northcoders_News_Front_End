import { expect } from 'chai';
import getArticlesByTopicReducer, { getInitialState } from '../../src/reducers/getArticlesByTopic';
import {
  getArticlesByTopicRequest,
  getArticlesByTopicSuccess,
  getArticlesByTopicFailure
} from '../../src/actions/getArticlesByTopic';

describe('#getArticlesByTopic reducer', () => {
  it('returns the previous state if passed unknown action type', () => {

    const badAction = { type: 'banana' };
    const initialState = getInitialState();
    const previouState = getArticlesByTopicReducer(initialState, badAction);

    expect(previouState).to.eql(initialState);
  });

  it('returns initialState if not passed a state', () => {

    const action = { type: 'action' };
    const initialState = getInitialState();
    const testState = getArticlesByTopicReducer(undefined, action);
    expect(testState).to.eql(initialState);
  });

  it('returns the appropriate state for GET_ARTICLE_BY_TOPIC_REQUEST action', () => {

    const action = getArticlesByTopicRequest('example topic');
    const newState = getArticlesByTopicReducer(undefined, action);
    
    expect(newState.loading).to.be.true;
    expect(newState.error).to.be.null;
    expect(newState.data).to.eql([]);
  });

  it('returns the appropriate state for GET_ARTICLE_BY_TOPIC_SUCCESS action', () => {
    const data = [1,2,3,4]
    const action = getArticlesByTopicSuccess(data);
    const newState = getArticlesByTopicReducer(undefined, action);

    expect(newState.loading).to.be.false;
    expect(newState.error).to.be.null;
    expect(newState.data).to.eql(data);
  });

  it('returns the appropriate state for GET_ARTICLE_BY_TOPIC_FAILURE action', () => {
    const error = '404 page not found';
    const action = getArticlesByTopicFailure(error);
    const newState = getArticlesByTopicReducer(undefined, action);

    expect(newState.loading).to.be.false;
    expect(newState.error).to.eql(error);
    expect(newState.data).to.eql([]);
  });
});