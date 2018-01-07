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
    <div className="columns level">
      <div className="column is-1 level-left">
        <Votes parentObj={commentObj} voteTarget={'comments'} />
      </div>
      <div className="column level-right">
        <p className="Body">{body}</p>
        <p className="Author">Author: <Link to={`/user/${created_by}`}><strong>{created_by}</strong></Link></p>
        <p>Posted {created_at_text}</p>
        {deleteable && <button className='button' value={_id} onClick={deleteCommentHandler}>Delete</button>}
      </div>
    </div>
    </div>
  );
}

Comment.propTypes = {
  commentObj: PT.object.isRequired,
  deleteable: PT.bool.isRequired,
  deleteCommentHandler: PT.func.isRequired
};
