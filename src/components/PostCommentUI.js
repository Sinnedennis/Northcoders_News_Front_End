import React from 'react';

class PostCommentUI extends React.Component {
  render() {

    let { text, active, replyClickHandler, keyHandler, placeholder, handleSubmit } = this.props;

    const buttonText = active ? 'Cancel' : 'Reply';

    return (
      <div>
        <button className='button' onClick={replyClickHandler}>{buttonText}</button>
        {active && inputForm(placeholder, keyHandler, text, handleSubmit)}

      </div>
    );
  }
}

function inputForm(placeholder, keyHandler, text, handleSubmit) {
  return (
    <div>
      <p>Type your comment here</p>

      <form onSubmit={handleSubmit}>
        <label>
          <input type='text' placeholder={placeholder} onChange={keyHandler} value={text} />
          <button onSubmit={handleSubmit}>Submit</button>
        </label>
      </form>
    </div>
  );
}

export default PostCommentUI;