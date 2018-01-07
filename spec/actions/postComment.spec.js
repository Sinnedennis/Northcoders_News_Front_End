import { expect } from 'chai';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import postComment, {
  postCommentRequest,
  postCommentSuccess,
  postCommentFailure
} from '../../src/actions/postComment';

import { getCommentsRequest } from '../../src/actions/getComments';

import { API_URL } from '../../src/config';

const mockStore = configureMockStore([thunk]);

describe('#postComment', () => {

  afterEach(() => {
    nock.cleanAll();
  });

  it('dispatches POST_COMMENT_SUCCESS when receiving data', () => {

    const commentObj = {
      belongs_to: '1234',
      textBody: 'Have you seen the price of plums this year?'
    };

    const message = 'Comment successfully posted';

    nock(API_URL)
      .post(`/articles/${commentObj.belongs_to}/comments/`)
      .reply(200, { message });

    nock(API_URL)
      .get(`/articles/${commentObj.belongs_to}/comments/`)
      .reply(200);


    const expectedActions = [
      postCommentRequest(commentObj),
      postCommentSuccess({ message }),
    ];
    const store = mockStore();

    return store.dispatch(postComment(commentObj))
      .then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
  });

  it('dispatches POST_COMMENT_FAILURE when given bad input data', () => {

    const commentObj = {
      belongs_to: '1234',
      textBody: 'Have you seen the price of plums this year?'
    };
    const error = 'failed to post comment';

    nock(API_URL)
      .post(`/articles/${commentObj.belongs_to}/comments/`)
      .replyWithError({ message: error });

    const expectedActions = [
      postCommentRequest(commentObj),
      postCommentFailure(error)
    ];

    const store = mockStore({});

    return store.dispatch(postComment(commentObj))
      .then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
  });
});
