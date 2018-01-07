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
      <h2 className="subtitle" id="ArticleSubtitle">Topic: {belongs_to}</h2>

      <div className="columns level" id="BodyAndVotes">
        <div className="column is-1 level-left">
          <Votes parentObj={article} voteTarget={'articles'} />
        </div>
        <div className="column level-right">
          <p className="body">{body}</p>
        </div>
      </div>

      <p>Posted by: <Link to={`/user/${created_by}`}><strong>{created_by}</strong></Link></p>
    </div>
  );
}

Article.propTypes = {
  article: PT.any.isRequired
};