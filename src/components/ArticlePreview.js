import React from 'react';
import { Link } from 'react-router-dom';
import Votes from '../containers/Votes';

class ArticlePreview extends React.Component { 

  render() {
    const { _id, title, body, created_by, belongs_to, votes } = this.props.article;

    let bodyPreview;
    if (body.length >= 300) {
      bodyPreview = body.slice(0, 300);
      bodyPreview = bodyPreview + '...';
    } else bodyPreview = body;

    return (
      <div className="Article">
        <Link to={`/article/${_id}`}>

          <p>{title}</p>
          <p>{bodyPreview}</p>
          <p>Article Index: {this.props.index}</p>
          <Link to={`/user/${created_by}`}><p>{created_by}</p></Link>
          <p>{belongs_to}</p>
          <p>{_id}</p>
        </Link>
        <Votes parentObj={this.props.article} voteTarget={'articles'} />
      </div>
    );
  }
}

export default ArticlePreview;