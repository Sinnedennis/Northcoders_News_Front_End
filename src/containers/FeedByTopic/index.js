import React from 'react';
import { connect } from 'react-redux';
import PT from 'prop-types';

import getArticlesByTopic from '../../actions/getArticlesByTopic';

import ArticlePreview from '../../components/ArticlePreview';
import OrderBy from '../../components/OrderBy';
import PageNumUI from '../../components/PageNumUI';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import { orderArticles } from '../../components/helpers';


class TopicalArtcles extends React.Component {
  constructor(props) {
    super(props);

    this.pageLength = 10;

    this.state = {
      order: 'high',
      page: 0
    };

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
    const topicId = this.props.match.params.topicId;

    this.props.getArticlesByTopic(topicId);
  }

  componentWillReceiveProps(nextProps) {
    const NewTopicId = nextProps.match.params.topicId;
    const currentTopicId = this.props.match.params.topicId;

    if (currentTopicId !== NewTopicId) {
      this.props.getArticlesByTopic(NewTopicId);
      this.setState();
    }
  }


  render() {
    const { articles, loading, error } = this.props;

    return (
      <div className="Feed">

        <OrderBy handleClick={this.handleOrderClick} />

        {
          articles.length > this.pageLength 
            ? <PageNumUI handlePageClick={this.handlePageClick} activePage={this.state.page} pageTotal={Math.ceil(articles.length / this.pageLength)} />
            : null
        }
        
        {
          error ? <Error error={error} />
            : loading ? <Loading loading={true} />
              : orderArticles(articles, this.state.order)
                .slice(this.state.page * this.pageLength,
                  this.state.page * this.pageLength + this.pageLength)
                .map((articleObj, i) => <ArticlePreview article={articleObj} index={i + 1 + (this.state.page * this.pageLength)} key={i} />)
        }

        {
          articles.length > this.pageLength 
            ? <PageNumUI handlePageClick={this.handlePageClick} activePage={this.state.page} pageTotal={Math.ceil(articles.length / this.pageLength)} />
            : null
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.articlesByTopic.data,
  loading: state.articlesByTopic.loading,
  error: state.articlesByTopic.error
});
const mapDispatchToProps = dispatch => ({
  getArticlesByTopic: (topic_id) => {
    dispatch(getArticlesByTopic(topic_id));
  }
});

TopicalArtcles.propTypes = {
  articles: PT.any,
  loading: PT.bool.isRequired,
  error: PT.object,

  match: PT.object.isRequired,
  getArticlesByTopic: PT.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicalArtcles);