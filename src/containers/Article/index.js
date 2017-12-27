import React from 'react';
import { connect } from 'react-redux';
import PT from 'prop-types';

import fetchArticleById from '../../actions/articleById.js';

import ArticleUI from '../../components/Article';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import PostComment from '../PostComment';


class Article extends React.Component {

  componentWillMount() {
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
          < PostComment articleId={article._id} />
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

Article.propTypes = {
  articleId: PT.string.isRequired,
  loading: PT.bool.isRequired,
  error: PT.object,
  article: PT.any.isRequired,

  fetchArticleById: PT.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);