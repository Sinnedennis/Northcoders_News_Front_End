import { expect } from 'chai';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import deleteComment, {
  deleteCommentRequest,
  deleteCommentSuccess,
  deleteCommentFailure
} from '../../src/actions/deleteComment';

import { API_URL } from '../../src/config';

const mockStore = configureMockStore([thunk]);

describe('#deleteComment', () => {

  afterEach(() => {
    nock.cleanAll();
  });

  it('dispatches DELETE_COMMENT_SUCCESS when receiving 200 status code', () => {

    const commentId = '12345';
    const articleId = '67890';
    const message = 'Comment was deleted';
    const deletedComment = {
      belongs_to: 'northcoder'
    };

    nock(API_URL)
      .delete(`/comments/${commentId}/`)
      .reply(200, { message, deletedComment });

    nock(API_URL)
      .get(`articles/${articleId}/comments/`)
      .reply(200);


    const expectedActions = [
      deleteCommentRequest(commentId),
      deleteCommentSuccess(message),
    ];
    const store = mockStore();

    return store.dispatch(deleteComment(commentId))
      .then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
  });

  it('dispatches DELETE_COMMENT_FAILURE when receiving an error', () => {

    const error = 'message deletion failed';
    const commentId = '12345';

    nock(API_URL)
      .delete(`/comments/${commentId}/`)
      .replyWithError({ message: error });

    const expectedActions = [
      deleteCommentRequest(commentId),
      deleteCommentFailure(error)
    ];

    const store = mockStore({});

    return store.dispatch(deleteComment(commentId))
      .then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
  });

});
