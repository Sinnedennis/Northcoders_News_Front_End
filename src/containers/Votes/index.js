import React, { Component } from 'react';
import { connect } from 'react-redux';
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


  clickHandler(e) {
    e.preventDefault();
    const { voteTarget, putVote, parentObj: { _id: id } } = this.props;

    putVote(id, voteTarget, e.target.value);
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.parentObj._id === nextProps.voteData._id) return true;       //Update when vote changes
    else if (nextProps.parentObj._id !== this.props.parentObj._id) return true; //Update when re-ordered
    else return false;
  }

  componentWillReceiveProps(nextProps) {

    let newVotes;

    if (nextProps.parentObj._id !== this.props.parentObj._id) {
      newVotes = nextProps.parentObj.votes;
    } else newVotes = nextProps.voteData.votes;

    this.setState({
      votes: newVotes
    });
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