import React from 'react';
import PT from 'prop-types';

import ArticlePreview from './ArticlePreview';

export default function UserArticles({ articles, userName }) {

  return (
    <div>
      <p>Here are the articles by {userName}</p>

      {articles.map(articleObj => <ArticlePreview article={articleObj} key={articleObj._id} />)}

    </div>
  );
}

UserArticles.propTypes = {
  articles: PT.array.isRequired,
  userName: PT.string.isRequired
};