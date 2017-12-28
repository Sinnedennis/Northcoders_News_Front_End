import { expect } from 'chai';
import getArticleByIdReducer, { getInitialState } from '../../src/reducers/getArticleById';
import {
  getArticleByIdRequest,
  getArticleByIdSuccess,
  getArticleByIdFailure
} from '../../src/actions/getArticleById';

describe.only('#getArticleById reducer', () => {
  it('returns the previous state if passed unknown action type', () => {

    const badAction = { type: 'banana' };
    const initialState = getInitialState();
    const previouState = getArticleByIdReducer(initialState, badAction);

    expect(previouState).to.eql(initialState);
  });

  it('returns initialState if not passed a state', () => {

    const action = { type: 'action' };
    const initialState = getInitialState();
    const testState = getArticleByIdReducer(undefined, action);
    expect(testState).to.eql(initialState);
  });

  it('returns the appropriate state for GET_ARTICLE_BY_ID_REQUEST action', () => {

    const action = getArticleByIdRequest('id: 1234');
    const newState = getArticleByIdReducer(undefined, action);

    expect(newState.loading).to.be.true;
    expect(newState.error).to.be.null;
    expect(newState.data).to.eql([]);
  });

  it('returns the appropriate state for GET_ARTICLE_BY_ID_SUCCESS action', () => {
    const data = [1,2,3,4]
    const action = getArticleByIdSuccess(data);
    const newState = getArticleByIdReducer(undefined, action);

    expect(newState.loading).to.be.false;
    expect(newState.error).to.be.null;
    expect(newState.data).to.eql(data);
  });

  it('returns the appropriate state for GET_ARTICLE_BY_ID_FAILURE action', () => {
    const error = '404 page not found';
    const action = getArticleByIdFailure(error);
    const newState = getArticleByIdReducer(undefined, action);

    expect(newState.loading).to.be.false;
    expect(newState.error).to.eql(error);
    expect(newState.data).to.eql([]);
  });
});