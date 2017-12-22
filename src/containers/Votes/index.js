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
    const { voteTarget, putVote, parentObj: { _id: id } } = this.props;

    putVote(id, voteTarget, e.target.value);
  }

  shouldComponentUpdate(nextProps) {
    return this.props.parentObj._id === nextProps.voteData._id;
  }

  componentWillReceiveProps(nextProps) {
    const { votes } = nextProps.voteData;

    this.setState({
      votes: votes
    })
  }

  render() {
    return (
      <div>
        <VoteUI clickHandler={this.clickHandler} votes={this.state.votes} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  voteData: state.voteData.data,
  loading: state.voteData.loading,
  error: state.voteData.error,
});

const mapDispatchToProps = (dispatch) => ({
  putVote: (id, target, vote) => {
    dispatch(putVote(id, target, vote));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Votes);