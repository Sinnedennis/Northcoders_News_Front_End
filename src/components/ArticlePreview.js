import React from 'react';
import { Link } from 'react-router-dom';
import Votes from './Votes';

class ArticlePreview extends React.Component {
  render() {
    const { _id, title, body, created_by, belongs_to, votes } = this.props.articleObj;

    return (
      <Link to={`/article/${_id}`}>
        <div className="Article">

          <p>{title}</p>
          <p>{body}</p>
          <p>{created_by}</p>
          <p>{belongs_to}</p>
          <p>{_id}</p>
          <Votes article={this.props.articleObj} voteTarget={'articles'} />
        </div>
      </Link>
    );
  }
}

export default ArticlePreview;