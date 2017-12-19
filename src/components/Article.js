import React from 'react';
import { connect } from 'react-redux';
import fetchArticleById from '../actions/articleById.js';

class Article extends React.Component {

  componentWillMount() {
    const {articleId} = this.props.match.params;
    this.props.fetchArticleById(articleId);
  }

  render() {
    const { _id, title, body, created_by, belongs_to, votes } = this.props.article;
  
    return (
      <div>
        <p>Hello. I am an article</p>

        <p>{title}</p>
        <p>{body}</p>
        <p>{created_by}</p>
        <p>{belongs_to}</p>
        <p>{votes}</p>
        <p>{_id}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  article: state.article.data,
  loading: state.article.loading,
  error: state.article.error
});
const mapDispatchToProps = dispatch => ({
  fetchArticleById: (articleId) => {
    dispatch(fetchArticleById(articleId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Article);