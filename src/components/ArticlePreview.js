import React from 'react';
import { Link } from 'react-router-dom';
import Votes from '../containers/Votes';

export default function ArticlePreview({ article, index }) {

  const { _id, title, body, created_by, belongs_to, votes } = article;

  return (
    <div className="Article">
      <Link to={`/article/${_id}`}>

        <p>{title}</p>
        <p>{body}</p>
        <p>Article Index: {index+1}</p>
        <p>{created_by}</p>
        <p>{belongs_to}</p>
        <p>{_id}</p>
      </Link>
      <Votes parentObj={article} voteTarget={'articles'} />
    </div>
  );
}