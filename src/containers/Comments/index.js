import React from 'react';
import { connect } from 'react-redux';
import PT from 'prop-types';

import getComments from '../../actions/getComments.js';
import deleteComment from '../../actions/deleteComment.js';

import Comment from '../../components/Comment';
import OrderByComments from '../../components/OrderByComments';
import PageNumUI from '../../components/PageNumUI';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

import { orderArticles } from '../../utils';
import { commentsPerPage } from '../../config';

class Comments extends React.Component {

  constructor(props) {
    super(props);

    this.pageLength = commentsPerPage;

    this.state = {
      order: 'high',
      pageNum: 0
    };

    this.handleOrderClick = this.handleOrderClick.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
    this.handleCommentDelete = this.handleCommentDelete.bind(this);
  }

  handleOrderClick(e) {
    e.preventDefault();
    this.setState({ order: e.target.value });
  }

  handlePageClick(e) {
    e.preventDefault();
    this.setState({ pageNum: Number(e.target.value) });
  }

  handleCommentDelete(e) {
    e.preventDefault();
    this.props.deleteComment(e.target.value);
  }

  componentDidMount() {
    const { articleId } = this.props;
    this.props.getComments(articleId);
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.comments.length > 0 && nextProps.comments.length === 0) return false;
    else return true;
  }

  render() {
    const { comments, loading, error } = this.props;
    const { pageNum } = this.state;

    const minPageIndex = pageNum * this.pageLength;
    const maxPageIndex = pageNum * this.pageLength + this.pageLength;

    const cardsPerPage = [minPageIndex, maxPageIndex];

    if (error) return <Error error={error} />;
    if (loading) return <Loading />;

    return (
      <div>
        <OrderByComments handleClick={this.handleOrderClick} />

        {
          comments.length > this.pageLength && 
          <PageNumUI 
            handlePageClick={this.handlePageClick} 
            activePage={pageNum} 
            pageTotal={Math.ceil(comments.length / this.pageLength)} 
          />
        }

        {
          orderArticles(comments, this.state.order)
            .slice(...cardsPerPage)
            .map((commentObj, i) =>
              <Comment 
                commentObj={commentObj} 
                deleteCommentHandler={this.handleCommentDelete} 
                deleteable={commentObj.created_by === 'northcoder'}
                key={i} 
              />
            )
        }

        {
          comments.length > this.pageLength &&
            <PageNumUI 
              handlePageClick={this.handlePageClick} 
              activePage={pageNum} 
              pageTotal={Math.ceil(comments.length / this.pageLength)} 
            />
        }
      </div >
    );
  }
}

const mapStateToProps = state => ({
  comments: state.comments.data,
  loading: state.comments.loading,
  error: state.comments.error,
});
const mapDispatchToProps = dispatch => ({
  getComments: (articleId) => {
    dispatch(getComments(articleId));
  },
  deleteComment: (commentId) => {
    dispatch(deleteComment(commentId));
  }
});

Comments.propTypes = {
  comments: PT.any,
  loading: PT.bool.isRequired,
  error: PT.object,

  articleId: PT.string.isRequired,

  getComments: PT.func.isRequired,
  deleteComment: PT.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);