import React from 'react';
import { connect } from 'react-redux';
import PT from 'prop-types';

import fetchUser from '../../actions/user';
import fetchArticles from '../../actions/articles';

import UserPageUI from '../../components/UserPageUI';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import UserArticles from '../../components/UserArticles';

class UserPage extends React.Component {

  componentDidMount() {
    const { userName } = this.props.match.params;
    this.props.fetchUser(userName);
    this.props.fetchArticles();
  }

  render() {

    const { errorUser, loadingUser, user } = this.props;
    const { errorArticles, loadingArticles, articles } = this.props;
    let filteredArticles;

    if (loadingArticles === false && loadingUser === false) {
      filteredArticles = articles.filter(article => article.created_by === user.username);
    }

    return (
      <div>
        {
          errorUser ? <Error error={errorUser} />
            : loadingUser ? <Loading />
              : <UserPageUI user={user} />
        }

        {
          errorArticles || errorUser ? <Error error={errorArticles} />
            : loadingArticles || loadingUser ? <Loading />
              : filteredArticles.length > 0 && <UserArticles articles={filteredArticles} userName={user.username}/>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.data,
  loadingUser: state.user.loading,
  errorUser: state.user.error,

  articles: state.articles.data,
  loadingArticles: state.articles.loading,
  errorArticles: state.articles.error
});
const mapDispatchToProps = dispatch => ({
  fetchUser: (userName) => {
    dispatch(fetchUser(userName));
  },
  fetchArticles: () => {
    dispatch(fetchArticles());
  }
});

UserPage.propTypes = {
  user: PT.any.isRequired,
  loadingUser: PT.bool.isRequired,
  errorUser: PT.object,

  articles: PT.any.isRequired,
  loadingArticles: PT.bool.isRequired,
  errorArticles: PT.object,

  match: PT.object.isRequired,
  
  fetchUser: PT.func.isRequired,
  fetchArticles: PT.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);