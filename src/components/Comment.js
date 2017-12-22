import React from 'react';
import { Link } from 'react-router-dom';
import Votes from '../containers/Votes';

export default function Comment({commentObj}) {

  const { _id, belongs_to, body, created_at, created_by, votes } = commentObj;
  return (
    <div className="Comment">
      <p>This is a comment</p>
      <p>id: {_id}</p>
      <p>{created_at}</p>
      <Link to={`/user/${created_by}`}><p>{created_by}</p></Link>
      <p>Belongs to{belongs_to}</p>
      <p>{body}</p>
      <Votes parentObj={commentObj} voteTarget={'comments'} />
    </div>
  );
}
