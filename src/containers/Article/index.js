import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import fetchArticleById from '../../actions/articleById.js';

import ArticleUI from '../../components/Article';
import Loading from '../../components/Loading';
import Error from '../../components/Error';


class Article extends React.Component {

  componentDidMount() {
    const { articleId } = this.props;
    this.props.fetchArticleById(articleId);
  }

  render() {
    const { loading, error } = this.props;

    return (
      <div>
        { error ? <Error error={error.message} /> 
          : loading ? <Loading /> 
            : ArticleUI(this.props.article)
        }
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