import React from 'react';
import { Link } from 'react-router-dom';
import PT from 'prop-types';

import Votes from '../containers/Votes';
import { getTime } from '../utils';

import '../styling/Comment.css';

export default function Comment({ commentObj, deleteable, deleteCommentHandler }) {

  const { _id, body, created_at, created_by } = commentObj;
  const created_at_text = getTime(created_at);

  return (
    <div className="Comment">
      <p>{body}</p>
      <Link to={`/user/${created_by}`}><p>Posted by: {created_by}</p></Link>
      <p>Posted {created_at_text}</p>
      {deleteable && <button className='button' value={_id} onClick={deleteCommentHandler}>Delete</button>}
      <Votes parentObj={commentObj} voteTarget={'comments'} />
    </div>
  );
}

Comment.propTypes = {
  commentObj: PT.object.isRequired,
  deleteable: PT.bool.isRequired,
  deleteCommentHandler: PT.func.isRequired
};
