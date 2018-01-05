import React from 'react';
import { Link } from 'react-router-dom';
import PT from 'prop-types';

import Votes from '../containers/Votes';
import '../styling/Article.css';

export default function Article({ article }) {
  const { title, body, created_by } = article;
  let { belongs_to } = article;
  belongs_to = belongs_to[0].toUpperCase() + belongs_to.slice(1);
  return (
    <div className="ArticleBody">
      <h3 className="title">{title}</h3>
      <h2 className="subtitle">Topic: {belongs_to}</h2>
      <p className="body">{body}</p>
      <br/>
      <p>Posted by: <Link to={`/user/${created_by}`}>{created_by}</Link></p>
      <Votes parentObj={article} voteTarget={'articles'} />
    </div>
  );
}

Article.propTypes = {
  article: PT.object.isRequired
};