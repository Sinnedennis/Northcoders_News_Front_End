import React from 'react';
import { connect } from 'react-redux';
import fetchArticlesByTopic from '../../actions/articlesByTopic';
import ArticlePreview from '../../components/ArticlePreview';
import OrderBy from '../../components/OrderBy';
import PageNumUI from '../../components/PageNumUI';
import { orderArticles } from '../../components/helpers';
import Loading from '../../components/Loading';
import Error from '../../components/Error';


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

    this.props.fetchArticlesByTopic(topicId);
  }

  componentWillReceiveProps(nextProps) {
    const NewTopicId = nextProps.match.params.topicId;
    const currentTopicId = this.props.match.params.topicId;

    if (currentTopicId !== NewTopicId) {
      this.props.fetchArticlesByTopic(NewTopicId);
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
  fetchArticlesByTopic: (topic_id) => {
    dispatch(fetchArticlesByTopic(topic_id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TopicalArtcles);