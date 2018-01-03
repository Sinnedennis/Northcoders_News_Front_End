import React from 'react';
import { Link } from 'react-router-dom';
import PT from 'prop-types';

import Votes from '../containers/Votes';
import { textPreview } from '../utils';

class ArticlePreview extends React.Component {

  render() {
    const { _id, title, body, created_by, belongs_to } = this.props.article;

    const bodyPreview = textPreview(body);

    return (
      <div className="Article">

        <Link to={`/article/${_id}`}>
          {this.props.index && <p>Index: {this.props.index}</p>}
          <h3>{title}</h3>
          <p>{bodyPreview}</p>
          <p>Topic: {belongs_to}</p>
        </Link>

        <Link to={`/user/${created_by}`}><p>Posted by: {created_by}</p></Link>

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