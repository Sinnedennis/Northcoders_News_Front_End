import React, { Component } from 'react';
import { connect } from 'react-redux';
import PT from 'prop-types';

import putVote from '../../actions/putVote.js';
import VoteUI from '../../components/VotesUI';

class Votes extends Component {

  constructor(props) {
    super(props);

    this.state = {
      votes: this.props.parentObj.votes
    };

    this.clickHandler = this.clickHandler.bind(this);
  }


  clickHandler(e, vote) {
    e.preventDefault();
    const { voteTarget, putVote, parentObj: { _id: id } } = this.props;

    putVote(id, voteTarget, vote);
  }


  render() {
    return (
      <div>
        <VoteUI clickHandler={this.clickHandler} votes={this.props.parentObj.votes} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  voteData: state.vote.data,
  loading: state.vote.loading,
  error: state.vote.error,
});

const mapDispatchToProps = (dispatch) => ({
  putVote: (id, target, vote) => {
    dispatch(putVote(id, target, vote));
  }
});

Votes.propTypes = {
  voteData: PT.any,
  loading: PT.bool.isRequired,
  error: PT.string,

  parentObj: PT.object.isRequired,
  voteTarget: PT.string.isRequired,

  putVote: PT.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Votes);