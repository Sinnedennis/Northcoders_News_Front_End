import React from 'react';
import { connect } from 'react-redux';
import fetchArticlesByTopic from '../../actions/articlesByTopic';
import ArticlePreview from '../../components/ArticlePreview';
import OrderBy from '../../components/OrderBy';
import { orderArticles } from '../../components/helpers';
import Loading from '../../components/Loading';
import Error from '../../components/Error';


class TopicalArtcles extends React.Component {
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

        <OrderBy handleClick={this.handleClick} />
        
        {
          error ? <Error error={error} /> 
            : loading ? <Loading /> 
              : orderArticles(articles, this.state.order).map(articleObj => <ArticlePreview article={articleObj} />)
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