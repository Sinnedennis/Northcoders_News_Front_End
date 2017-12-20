import React from 'react';
import { connect } from 'react-redux';
import fetchCommentsById from '../actions/comments.js';
import Comment from './Comment';
import { orderArticles } from './helpers';

class Comments extends React.Component {

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
        const { articleId } = this.props;
        this.props.fetchCommentsById(articleId);
    }

    render() {
        const { comments } = this.props;
        return (
            <div>
                <div>
                    <p>Order by:</p>
                    <div className="select">
                        <select onChange={this.handleClick}>
                            <option value="high">Most popular</option>
                            <option value="low">Least popular</option>
                        </select>
                    </div>
                </div>

                {comments.length !== 0 ?
                    orderArticles(comments, this.state.order).map(commentObj => <Comment commentObj={commentObj} key={commentObj._id} />)
                    : <p>LOADING</p>}
            </div>

        );
    }
}

const mapStateToProps = state => ({
    comments: state.comments.data,
    loading: state.comments.loading,
    error: state.comments.error
});
const mapDispatchToProps = dispatch => ({
    fetchCommentsById: (articleId) => {
        dispatch(fetchCommentsById(articleId));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);