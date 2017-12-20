import React, { Component } from 'react';
import { connect } from 'react-redux';
import putVote from '../actions/putVote.js';

class Votes extends Component {

  constructor(props) {
    super(props);

    this.state = {
      votes: this.props.article.votes
    };

    this.clickHandler = this.clickHandler.bind(this);
  }


  clickHandler(e) {
    e.preventDefault();
    const {article, voteTarget} = this.props;
    console.log('HELLO',this.props);
    this.props.putVote(article._id, voteTarget, e.target.value);
  }


  componentWillReceiveProps(nextProps) {

    if (nextProps.data.wasSuccessful) {

      this.setState({
        votes: nextProps.data.article.votes
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

const mapStateToProps = state => ({
  data: state.voteData.data,
  loading: state.voteData.loading,
  error: state.voteData.error,
});

const mapDispatchToProps = dispatch => ({
  putVote: (id, target, vote) => {
    dispatch(putVote(id, target, vote));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Votes);