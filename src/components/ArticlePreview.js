import React from 'react';
import { Link } from 'react-router-dom'

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
          <p>{votes}</p>
          <p>{_id}</p>

        </div>
      </Link>
    );
  }
}

export default ArticlePreview;