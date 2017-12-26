import React from 'react';
import PT from 'prop-types';

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

ArticleAndComments.propTypes = {
  match: PT.object.isRequired
};


export default ArticleAndComments;