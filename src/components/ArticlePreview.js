import React from 'react';
import { Link } from 'react-router-dom';
import PT from 'prop-types';

import Votes from '../containers/Votes';
import { textPreview } from '../utils';
import { articlePreviewLength } from '../config';

import '../styling/Article.css';

class ArticlePreview extends React.Component {

  render() {
    const { _id, title, body, created_by, belongs_to } = this.props.article;

    const bodyPreview = textPreview(body);

    return (
      <div className="Article">

        <Link to={`/article/${_id}`}>
          {/* {this.props.index && <p>Index: {this.props.index}</p>} */}
          <h2 className="title">{title}</h2>
          <h3 className="subtitle">Topic: {belongs_to}</h3>
          <p>{bodyPreview} {bodyPreview.length > articlePreviewLength && <a>Click here to read more</a>}</p>
        </Link>
        <br />
        <p>Posted by:  <Link to={`/user/${created_by}`} className="Author">{created_by}</Link></p>

        <Votes parentObj={this.props.article} voteTarget={'articles'} />
      </div>
    );
  }
}

ArticlePreview.propTypes = {
  article: PT.object.isRequired,
  index: PT.number
};

export default ArticlePreview;