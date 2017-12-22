import React from 'react';
import { Link } from 'react-router-dom';
import Votes from '../containers/Votes';

class ArticlePreview extends React.Component { 

  render() {

    const { _id, title, body, created_by, belongs_to, votes } = this.props.article;

    console.log('ARTICLEPREVIEWRENDEREDARTICLEPREVIEWRENDEREDARTICLEPREVIEWRENDEREDARTICLEPREVIEWRENDERED');
    
    return (
      <div className="Article">
        <Link to={`/article/${_id}`}>

          <p>{title}</p>
          <p>{body}</p>
          <p>Article Index: {this.props.index}</p>
          <p>{created_by}</p>
          <p>{belongs_to}</p>
          <p>{_id}</p>
        </Link>
        <Votes parentObj={this.props.article} voteTarget={'articles'} />
      </div>
    );
  }
}

export default ArticlePreview;