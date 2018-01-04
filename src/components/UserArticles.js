import React from 'react';
import PT from 'prop-types';

import ArticlePreview from './ArticlePreview';

import '../styling/UserArticles.css';

export default function UserArticles({ articles, userName }) {

  return (
    <div>
      <div className="UserArticlesTag">
        <p>Here are the articles by {userName}</p>
      </div>

      {articles.map(articleObj => <ArticlePreview article={articleObj} key={articleObj._id} />)}

    </div>
  );
}

UserArticles.propTypes = {
  articles: PT.array.isRequired,
  userName: PT.string.isRequired
};