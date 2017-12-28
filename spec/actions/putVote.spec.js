import { expect } from 'chai';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import putVote, {
  putVoteRequest,
  putVoteSuccess,
  putVoteFailure
} from '../../src/actions/putVote';

import { API_URL } from '../../src/config';

const mockStore = configureMockStore([thunk]);

describe('#putVote', () => {

  afterEach(() => {
    nock.cleanAll();
  });

  it('dispatches PUT_VOTE_SUCCESS when receiving data', () => {

    const id = '123';
    const target = 'comments';
    const vote = 'up';

    const votedData = {
      votes: 10,
      _id: '123'
    };

    nock(API_URL)
      .put(`/${target}/${id}?vote=${vote}`)
      .reply(200, { votedData });


    const expectedActions = [
      putVoteRequest(id, target, vote),
      putVoteSuccess(votedData)
    ];
    const store = mockStore();

    return store.dispatch(putVote(id, target, vote))
      .then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
  });

  it('dispatches PUT_VOTE_FAILURE when given bad input data', () => {

    const id = '123';
    const target = 'comments';
    const vote = 'up';
    const error = 'Voting failed.';

    nock(API_URL)
      .put(`/${target}/${id}?vote=${vote}`)
      .replyWithError({ message: error });

    const expectedActions = [
      putVoteRequest(id, target, vote),
      putVoteFailure(error)
    ];

    const store = mockStore({});

    return store.dispatch(putVote(id, target, vote))
      .then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
  });
});
