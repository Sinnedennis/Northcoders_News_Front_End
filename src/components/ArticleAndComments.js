import React from 'react';
import Article from './Article.js';
import Comments from './Comments.js';

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