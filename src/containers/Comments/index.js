import React from 'react';
import { connect } from 'react-redux';
import fetchCommentsById from '../../actions/comments.js';
import Comment from '../../components/Comment';
import OrderBy from '../../components/OrderBy';
import { orderArticles } from '../../components/helpers';

class Comments extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      order: "high",
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ order: e.target.value })
  }

  componentWillMount() {
    const { articleId } = this.props;
    this.props.fetchCommentsById(articleId);
  }

  render() {
    const { comments } = this.props;
    return (
      <div>
        {OrderBy(this.handleClick)}

        {
          comments.length !== 0 ?
            orderArticles(comments, this.state.order).map(commentObj => Comment(commentObj))
            : <p>LOADING</p>
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