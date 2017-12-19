import React from 'react';
import { connect } from 'react-redux';
import fetchArticles from '../actions/articles.js';
import Article from './Article';
import {orderArticles} from './helpers';

class Feed extends React.Component {
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
    this.props.fetchArticles();
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
          orderArticles(articles, this.state.order).map(articleObj => <Article articleObj={articleObj} key={articleObj._id} />)
          : <p>LOADING</p>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.articles.data,
  loading: state.articles.loading,
  error: state.articles.error
});
const mapDispatchToProps = dispatch => ({
  fetchArticles: () => {
    dispatch(fetchArticles());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);