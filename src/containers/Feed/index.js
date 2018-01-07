import React from 'react';
import { connect } from 'react-redux';
import PT from 'prop-types';

import getAllArticles from '../../actions/getAllArticles.js';

import ArticlePreview from '../../components/ArticlePreview';
import PageNumUI from '../../components/PageNumUI';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import OrderBy from '../../components/OrderBy';

import { orderArticles } from '../../utils';
import { articlePerPage } from '../../config';

import '../../styling/Feed.css';

class Feed extends React.Component {
  constructor(props) {
    super(props);

    this.pageLength = articlePerPage;

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

  componentWillMount() {
    this.props.getAllArticles();
  }

  render() {
    const { articles, loading, error } = this.props;

    return (
      <div className="Feed">

        <OrderBy handleClick={this.handleOrderClick} />

        {
          articles.length > this.pageLength &&
            <PageNumUI handlePageClick={this.handlePageClick} activePage={this.state.page} pageTotal={Math.ceil(articles.length / this.pageLength)} />
        }
       
        {
          error ? <Error error={error} />
            : loading ? <Loading />
              : orderArticles(articles, this.state.order)
                .slice(this.state.page * this.pageLength,
                  this.state.page * this.pageLength + this.pageLength)
                .map((articleObj, i) => <ArticlePreview article={articleObj} index={i + 1 + (this.state.page * this.pageLength)} key={i} />)
        }

        {
          articles.length > this.pageLength &&
            <PageNumUI handlePageClick={this.handlePageClick} activePage={this.state.page} pageTotal={Math.ceil(articles.length / this.pageLength)} />
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.articles.allArticles,
  loading: state.articles.loadingAll,
  error: state.articles.error
});
const mapDispatchToProps = dispatch => ({
  getAllArticles: () => {
    dispatch(getAllArticles());
  },
});

Feed.propTypes = {
  articles: PT.any,
  loading: PT.bool.isRequired,
  error: PT.string,

  getAllArticles: PT.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);