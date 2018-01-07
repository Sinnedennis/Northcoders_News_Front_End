import React from 'react';
import { Link } from 'react-router-dom';
import PT from 'prop-types';

import Votes from '../containers/Votes';
import { textPreview } from '../utils';
import { articlePreviewLength } from '../config';

import '../styling/Article.css';

class ArticlePreview extends React.Component {

  render() {

    const { _id, title, body, created_by } = this.props.article;
    const bodyPreview = textPreview(body);

    let { belongs_to } = this.props.article;
    belongs_to = belongs_to[0].toUpperCase() + belongs_to.slice(1);

    return (
      <div className="Article">
        <div className="columns level">
          <div className="column is-1 level-left">
            <Votes parentObj={this.props.article} voteTarget={'articles'} />
          </div>

          <div className="column level-right">
            <Link to={`/article/${_id}`}>
              <h2 className="title">{title}</h2>
              <h3 className="subtitle">Topic: {belongs_to}</h3>
            </Link>
            <p className="body">{bodyPreview} {bodyPreview.length > articlePreviewLength && <Link to={`/article/${_id}`}>Click here to read more</Link>}</p>

            <p>Posted by:  <Link to={`/user/${created_by}`} className="Author"><strong>{created_by}</strong></Link></p>
          </div>
        </div>
      </div>
    );
  }
}

ArticlePreview.propTypes = {
  article: PT.object.isRequired,
  index: PT.number
};

export default ArticlePreview;