import React from 'react';
import { connect } from 'react-redux';
import fetchArticles from '../actions/articles.js';
import Article from './Article';

class Feed extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentWillMount() {
    this.props.fetchArticles();
  }

  render() {
    const {articles} = this.props;

    return (
      <div className="Feed">

        <p>This is the feed.</p>

        {articles !== undefined ? 
          articles.map(articleObj => <Article articleObj={articleObj}/>) 
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