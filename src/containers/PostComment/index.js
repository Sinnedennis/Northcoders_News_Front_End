import React from 'react';
import { connect } from 'react-redux';
import PT from 'prop-types';

import postComment from '../../actions/postComment.js';
import PostCommentUI from '../../components/PostCommentUI';

class PostComment extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      active: false,
      text: ''
    };

    this.replyClickHandler = this.replyClickHandler.bind(this);
    this.keyHandler = this.keyHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  replyClickHandler(e) {
    e.preventDefault();
    this.setState({ active: !this.state.active });
  }

  keyHandler(e) {
    e.preventDefault();
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const newComment = {
      commentText: this.state.text,
      belongs_to: this.props.articleId
    };

    this.props.postComment(newComment);

    this.setState({
      active: false,
      text: ''
    });
  }

  render() {

    const { active, text } = this.state;

    return (
      <div>
        <PostCommentUI text={text}
          replyClickHandler={this.replyClickHandler}
          keyHandler={this.keyHandler}
          active={active}
          placeHolder='Add comment'
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.comments.data,
  loading: state.comments.loading,
  error: state.comments.error
});
const mapDispatchToProps = dispatch => ({
  postComment: (commentObj) => {
    dispatch(postComment(commentObj));
  }
});

PostComment.propTypes = {
  data: PT.any,
  loading: PT.bool.isRequired,
  error: PT.string,

  articleId: PT.string.isRequired,

  postComment: PT.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(PostComment);