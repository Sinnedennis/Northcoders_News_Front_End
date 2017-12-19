import React from 'react';
import { connect } from 'react-redux';
// import {Redirect} from 'react-router-dom';
import fetchArticlesByTopic from '../actions/articlesByTopic';
import ArticlePreview from './ArticlePreview';
import { orderArticles } from './helpers';


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
    const { articles } = this.props;

    return (
      <div className="Feed">

        <div>
          <p>Order by:</p>
          <div className="select">
            <select onChange={this.handleClick}>
              <option value="high">Most popular</option>
              <option value="low">Least popular</option>
            </select>
          </div>
        </div>


        {articles !== undefined ?
          orderArticles(articles, this.state.order).map(articleObj => <ArticlePreview articleObj={articleObj} key={articleObj._id} />)
          : <p>LOADING</p>}
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