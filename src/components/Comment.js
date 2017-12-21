import React from 'react';
import Votes from '../containers/Votes';

export default function Comment(comment) {

  const { _id, belongs_to, body, created_at, created_by, votes } = comment;
  return (
    <div className="Comment">
      <p>This is a comment</p>
      <p>id: {_id}</p>
      <p>{created_at}</p>
      <p>{created_by}</p>
      <p>Belongs to{belongs_to}</p>
      <p>{body}</p>
      <Votes parentObj={comment} voteTarget={'comments'} />
    </div>
  );
}
