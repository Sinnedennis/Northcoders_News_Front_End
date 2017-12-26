import React from 'react';
import PT from 'prop-types';

class PostCommentUI extends React.Component {
  render() {

    let { text, active, replyClickHandler, keyHandler, placeHolder, handleSubmit } = this.props;

    const buttonText = active ? 'Cancel' : 'Reply';

    return (
      <div>
        <button className='button' onClick={replyClickHandler}>{buttonText}</button>
        {active && inputForm(placeHolder, keyHandler, text, handleSubmit)}

      </div>
    );
  }
}

function inputForm(placeHolder, keyHandler, text, handleSubmit) {
  return (
    <div>
      <p>Type your comment here</p>

      <form onSubmit={handleSubmit}>
        <label>
          <input type='text' placeholder={placeHolder} onChange={keyHandler} value={text} />
          <button onSubmit={handleSubmit}>Submit</button>
        </label>
      </form>
    </div>
  );
}

PostCommentUI.propTypes = {
  text: PT.string.isRequired,
  active: PT.bool.isRequired,
  replyClickHandler: PT.func.isRequired,
  keyHandler: PT.func.isRequired,
  placeHolder: PT.string.isRequired,
  handleSubmit: PT.func.isRequired
};

export default PostCommentUI;