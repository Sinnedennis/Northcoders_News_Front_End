import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import fetchArticleById from '../actions/articleById.js';
import putVote from '../actions/putVote.js';


class Article extends React.Component {

  constructor(props){
    super(props);

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    e.preventDefault();

    this.props.putVote(this.props.article._id, 'articles', e.target.value);
  }

  componentWillMount() {
    const {articleId} = this.props;
    this.props.fetchArticleById(articleId);
  }

  render() {
    const { _id, title, body, created_by, belongs_to, votes } = this.props.article;
  
    return (
      <div>
        <p>Hello. I am an article</p>

        <p>{title}</p>
        <p>{body}</p>
        <p>{belongs_to}</p>
        <Link to={`/user/${created_by}`}><p>{created_by}</p></Link>
        <p>{votes}</p>
        <p>{_id}</p>
        <button className="button" value="up" onClick={this.clickHandler}>Upvote</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  article: state.article.data,
  loading: state.article.loading,
  error: state.article.error,

  // voteData: state.voteData.data,
  // voteLoading: state.voteData.loading,
  // voteError: state.voteData.error,
});
const mapDispatchToProps = dispatch => ({
  fetchArticleById: (articleId) => {
    dispatch(fetchArticleById(articleId));
  },
  putVote: (id, target, vote) => {
    dispatch(putVote(id, target, vote));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Article);