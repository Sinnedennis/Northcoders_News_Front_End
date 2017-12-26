import React from 'react';
import Article from '../containers/Article';
import Comments from '../containers/Comments';

class ArticleAndComments extends React.Component {

  render() {
    const { articleId } = this.props.match.params;
    return (
      <div>
        <Article articleId={articleId} />
        <Comments articleId={articleId} />
      </div>

    );
  }
}


export default ArticleAndComments;