import React from 'react';
import { connect } from 'react-redux';

import PostCommentUI from '../../components/PostCommentUI';

class PostComment extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      active: false,
      text: ''
    }

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
    console.log('Submitted: ', this.state.text);
    //Gram form value
    //Post comment action
    //Set form.value to ''
  }

  render() {

    const { active, text } = this.state;

    return (
      <div>
        <PostCommentUI text={text} 
          replyClickHandler={this.replyClickHandler} 
          keyHandler={this.keyHandler} 
          active={this.state.active}
          placeholder='Type here'
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

// const mapStateToProps = state => ({

// });
// const mapDispatchToProps = dispatch => ({

// });

export default PostComment;
// export default connect(mapStateToProps, mapDispatchToProps)(PostComment);