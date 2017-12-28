import { expect } from 'chai';
import getAllArticlesReducer, { getInitialState } from '../../src/reducers/getAllArticles';
import {
  getAllArticlesRequest,
  getAllArticlesSuccess,
  getAllArticlesFailure
} from '../../src/actions/getAllArticles';

describe.only('#getAllArticles reducer', () => {
  it('returns the previous state if passed unknown action type', () => {

    const badAction = { type: 'banana' };
    const initialState = getInitialState();
    const previouState = getAllArticlesReducer(initialState, badAction);

    expect(previouState).to.eql(initialState);
  });

  it('returns initialState if not passed a state', () => {

    const action = { type: 'action' };
    const initialState = getInitialState();
    const testState = getAllArticlesReducer(undefined, action);
    expect(testState).to.eql(initialState);
  });

  it('returns the appropriate state for GET_ALL_ARTICLES_REQUEST action', () => {

    const action = getAllArticlesRequest();
    const newState = getAllArticlesReducer(undefined, action);

    expect(newState.loading).to.be.true;
    expect(newState.error).to.be.null;
    expect(newState.data).to.eql([]);
  });

  it('returns the appropriate state for GET_ALL_ARTICLES_SUCCESS action', () => {
    const data = [1,2,3,4]
    const action = getAllArticlesSuccess(data);
    const newState = getAllArticlesReducer(undefined, action);

    expect(newState.loading).to.be.false;
    expect(newState.error).to.be.null;
    expect(newState.data).to.eql(data);
  });

  it('returns the appropriate state for GET_ALL_ARTICLES_FAILURE action', () => {
    const error = '404 page not found';
    const action = getAllArticlesFailure(error);
    const newState = getAllArticlesReducer(undefined, action);

    expect(newState.loading).to.be.false;
    expect(newState.error).to.eql(error);
    expect(newState.data).to.eql([]);
  });
});