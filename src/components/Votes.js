import React, { Component } from 'react';
import { connect } from 'react-redux';
import putVote from '../actions/putVote.js';

class Votes extends Component {

  constructor(props) {
    super(props);

    this.state = {
      votes: this.props.parentObj.votes
    };

    this.clickHandler = this.clickHandler.bind(this);
    // this.props.putVote = this.props.putVote.bind(this);
  }


  clickHandler(e) {
    e.preventDefault();
    const { voteTarget, putVote, parentObj: {_id: id} } = this.props;
    console.log('CLICK HANDLER', id, voteTarget, putVote);
    putVote(id, voteTarget, e.target.value);
  }


  componentWillReceiveProps(nextProps) {
    console.log('UPDATE TO PROPS');
    console.log(this.props);
    if (nextProps.data.wasSuccessful && nextProps.data.votedData._id === this.props.parentObj._id) {

      this.setState({
        votes: nextProps.data.votedData.votes
      });
    }
  }

  render() {
    return (
      <div>
        <button className="button" value="up" onClick={this.clickHandler}>Upvote</button>
        <button className="button" value="down" onClick={this.clickHandler}>Downvote</button>
        <p>{this.state.votes}</p>
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