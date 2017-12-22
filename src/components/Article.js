import React from 'react';
import { Link } from 'react-router-dom';

import Votes from '../containers/Votes';

export default function Article({ article }) {
  const { title, body, belongs_to, created_by, _id } = article;

  return (
    <div>
      <p>Hello. I am an article</p>

      <p>{title}</p>
      <p>{body}</p>
      <p>{belongs_to}</p>
      <Link to={`/user/${created_by}`}><p>{created_by}</p></Link>
      <Votes parentObj={article} voteTarget={'articles'} />
      <p>{_id}</p>

    </div>
  );
}