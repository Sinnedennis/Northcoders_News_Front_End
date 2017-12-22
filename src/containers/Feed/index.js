import React from 'react';
import { connect } from 'react-redux';
import fetchArticles from '../../actions/articles.js';
import ArticlePreview from '../../components/ArticlePreview';
import { orderArticles } from '../../components/helpers';
import PageNumUI from '../../components/PageNumUI';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import OrderBy from '../../components/OrderBy';

class Feed extends React.Component {
  constructor(props) {
    super(props);

    this.pageLength = 10;

    this.state = {
      order: "high",
      page: 0
    }

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
    this.props.fetchArticles();
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