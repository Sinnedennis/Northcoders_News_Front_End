import React from 'react';
import { connect } from 'react-redux';

import fetchCommentsById from '../../actions/comments.js';

import Comment from '../../components/Comment';
import OrderBy from '../../components/OrderBy';
import PageNumUI from '../../components/PageNumUI';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

import { orderArticles } from '../../components/helpers';
import { commentsPerPage } from '../../config';

class Comments extends React.Component {

  constructor(props) {
    super(props);

    this.pageLength = commentsPerPage;

    this.state = {
      order: "high",
      page: 0
    }

    this.handleOrderClick = this.handleOrderClick.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  handleOrderClick(e) {
    e.preventDefault();
    this.setState({ order: e.target.value });
  }

  handlePageClick(e) {
    e.preventDefault();
    this.setState({ page: Number(e.target.value) });
  }

  componentDidMount() {
    const { articleId } = this.props;
    this.props.fetchCommentsById(articleId);
  }

  render() {
    const { comments, loading, error } = this.props;

    return (
      <div>
        <OrderBy handleClick={this.handleOrderClick} />
        {
          comments.length > this.pageLength 
          ? <PageNumUI handlePageClick={this.handlePageClick} activePage={this.state.page} pageTotal={Math.ceil(comments.length / this.pageLength)} />
          : null
        }
        
        {
          error ? <Error error={error}/>
            : loading ? <Loading />
              : orderArticles(comments, this.state.order)
              .slice(this.state.page * this.pageLength,
                this.state.page * this.pageLength + this.pageLength)
              .map((commentObj, i) => <Comment commentObj={commentObj} key={i} />)
        }
      </div >
    );
  }
}

const mapStateToProps = state => ({
  comments: state.comments.data,
  loading: state.comments.loading,
  error: state.comments.error
});
const mapDispatchToProps = dispatch => ({
  fetchCommentsById: (articleId) => {
    dispatch(fetchCommentsById(articleId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);