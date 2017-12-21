import React from 'react';
import { connect } from 'react-redux';
import fetchArticles from '../../actions/articles.js';
import ArticlePreview from '../../components/ArticlePreview';
import {orderArticles} from '../../components/helpers';
import Loading from '../../components/Loading';
import OrderBy from '../../components/OrderBy';
import Error from '../../components/Error';

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
    const { articles, loading, error } = this.props;

    return (
      <div className="Feed">

        <OrderBy handleClick={this.handleClick} />

        { 
          error ? <Error error={error} />
            : loading ? <Loading loading={true} /> 
              : orderArticles(articles, this.state.order).map(articleObj => <ArticlePreview article={articleObj} />)
        }
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