import React from 'react';
import { Link } from 'react-router-dom';
import PT from 'prop-types';

import Votes from '../containers/Votes';

export default function Article({ article }) {
  const { title, body, belongs_to, created_by } = article;

  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
      <p>Topic: {belongs_to}</p>
      <Link to={`/user/${created_by}`}><p>Posted by: {created_by}</p></Link>
      <Votes parentObj={article} voteTarget={'articles'} />
    </div>
  );
}

Article.propTypes = {
  article: PT.object.isRequired
};