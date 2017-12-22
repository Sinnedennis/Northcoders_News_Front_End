import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import fetchArticleById from '../../actions/articleById.js';

import ArticleUI from '../../components/Article';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import PostComment from '../PostComment';


class Article extends React.Component {

  componentDidMount() {
    const { articleId } = this.props;
    this.props.fetchArticleById(articleId);
  }

  render() {
    const { loading, error, article } = this.props;

    if (error) return <Error error={error.message} />;
    else if (loading) return  <Loading />;
    else {
      return (
        <div>
          < ArticleUI article={article} />
          < PostComment />
        </div>
      );
    }
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