import React from 'react';
import { connect } from 'react-redux';
// import {Redirect} from 'react-router-dom';
import fetchArticlesByTopic from '../actions/articlesByTopic';
import Article from './Article';
import {orderArticles} from './helpers';


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
    this.setState({order: e.target.value})
  }

  componentWillMount() {
    const topic_id = this.props.match.params.id;

    this.props.fetchArticlesByTopic(topic_id);
  }


  render() {
    console.log(this.props.articles);
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
          orderArticles(articles, this.state.order).map(articleObj => <Article articleObj={articleObj} key={articleObj._id} />)
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