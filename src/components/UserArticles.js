import React from 'react';
import ArticlePreview from './ArticlePreview';

export default function UserArticles({ articles, username }) {

  return (
    <div>
      <p>Here are the articles by {username}</p>

      {articles.map(articleObj => <ArticlePreview article={articleObj} key={articleObj._id} />)}

    </div>
  );
}