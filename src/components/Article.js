import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import fetchArticleById from '../actions/articleById.js';

import Vote from './Votes';


class Article extends React.Component {

  componentWillMount() {
    const { articleId } = this.props;
    this.props.fetchArticleById(articleId);
  }

  render() {
    let { _id, title, body, created_by, belongs_to, votes } = this.props.article;

    return (
      <div>
        <p>Hello. I am an article</p>

        <p>{title}</p>
        <p>{body}</p>
        <p>{belongs_to}</p>
        <Link to={`/user/${created_by}`}><p>{created_by}</p></Link>
        <Vote parentObj={this.props.article} voteTarget={'articles'} />
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