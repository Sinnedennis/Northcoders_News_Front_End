import React from 'react';
import { connect } from 'react-redux';
import fetchUser from '../actions/user';
import fetchArticles from '../actions/articles';
import ArticlePreview from './ArticlePreview';

class UserPage extends React.Component {

    componentWillMount() {
        const { userName } = this.props.match.params;
        this.props.fetchUser(userName);
        this.props.fetchArticles();
    }

    addDefaultAvatar(e) {
        e.target.src = "https://www.keita-gaming.com/assets/profile/default-avatar-c5d8ec086224cb6fc4e395f4ba3018c2.jpg";
    }

    render() {
        const { _id, avatar_url, name, username } = this.props.user;
        let articles = this.props.articles;
        if (articles.length !== 0) {
            articles = this.props.articles.filter(article => article.created_by === username);
        }

        return (
            <div>
                <p>I am a user page.</p>
                <p>{_id}</p>
                <img src={avatar_url} onError={this.addDefaultAvatar} alt="User Avatar" />
                <p>{avatar_url}</p>
                <p>{name}</p>
                <p>{username}</p>

                <p>Here are the articles by {username}</p>

                {articles !== undefined ?
                    articles.map(articleObj => <ArticlePreview articleObj={articleObj} key={articleObj._id} />)
                    : <p>LOADING</p>}
            </div>

        );
    }
}

const mapStateToProps = state => ({
    user: state.user.data,
    loading: state.user.loading,
    error: state.user.error,

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

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);