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

          <p>{title}</p>
          <p>{bodyPreview}</p>
          {this.props.index && <p>Article Index: {this.props.index}</p>}
        </Link>
        <Link to={`/user/${created_by}`}><p>{created_by}</p></Link>
        <Link to={`/article/${_id}`}>
          <p>{belongs_to}</p>
          <p>{_id}</p>
        </Link>
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