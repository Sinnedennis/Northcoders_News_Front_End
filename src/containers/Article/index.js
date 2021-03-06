import React from 'react';
import { connect } from 'react-redux';
import PT from 'prop-types';

import getArticleById from '../../actions/getArticleById.js';

import ArticleUI from '../../components/Article';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import PostComment from '../PostComment';

import '../../styling/Article.css';

class Article extends React.Component {

  componentWillMount() {
    const { articleId } = this.props;

    this.props.getArticleById(articleId);
  }

  render() {
    const { loading, error, article } = this.props;

    if (error) return <Error error={error} />;
    else if (loading) return  <Loading />;
    else {
      return (

        <div className="Article">
          < ArticleUI article={article} />
          < PostComment articleId={article._id} />
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  article: state.articles.oneArticle,
  loading: state.articles.loadingById,
  error: state.articles.error
});
const mapDispatchToProps = dispatch => ({
  getArticleById: (articleId) => {
    dispatch(getArticleById(articleId));
  }
});

Article.propTypes = {
  articleId: PT.string.isRequired,
  loading: PT.bool.isRequired,
  error: PT.string,
  article: PT.any.isRequired,

  getArticleById: PT.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);