import React, { Component } from 'react';
import { connect } from 'react-redux';
import putVote from '../../actions/putVote.js';
import VoteUI from '../../components/VotesUI';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

class Votes extends Component {

  constructor(props) {
    super(props);

    this.state = {
      votes: this.props.parentObj.votes
    };

    this.clickHandler = this.clickHandler.bind(this);
  }


  clickHandler(e) {
    e.preventDefault();
    const { voteTarget, putVote, parentObj: {_id: id} } = this.props;

    putVote(id, voteTarget, e.target.value);
  }


  componentWillReceiveProps(nextProps) {

    if (nextProps.data.wasSuccessful && nextProps.data.votedData._id === this.props.parentObj._id) {

      this.setState({
        votes: nextProps.data.votedData.votes
      });
    }
  }

  render() {

    const { error, loading, data } = this.props;

    return (
      <div>
          <VoteUI clickHandler={this.clickHandler} votes={this.state.votes} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.voteData.data,
  loading: state.voteData.loading,
  error: state.voteData.error,
});

const mapDispatchToProps = (dispatch) => ({
  putVote: (id, target, vote) => {
    dispatch(putVote(id, target, vote));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Votes);