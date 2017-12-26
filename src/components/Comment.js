import React from 'react';
import { Link } from 'react-router-dom';
import Votes from '../containers/Votes';
import { getTime } from './helpers';

export default function Comment({ commentObj, deleteable, deleteCommentHandler }) {

  const { _id, belongs_to, body, created_at, created_by } = commentObj;
  const created_at_text = getTime(created_at);
  
  return (
    <div className="Comment">
      <p>This is a comment</p>
      <p>id: {_id}</p>
      <p>Posted {created_at_text}</p>
      <p>{created_at}</p>
      <Link to={`/user/${created_by}`}><p>{created_by}</p></Link>
      <p>Belongs to article: {belongs_to}</p>
      <p>{body}</p>
      {deleteable && <button className='button' value={_id} onClick={deleteCommentHandler}>Delete</button>}
      <Votes parentObj={commentObj} voteTarget={'comments'} />
    </div>
  );
}
