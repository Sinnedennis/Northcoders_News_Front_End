import React from 'react';
import { connect } from 'react-redux';
import fetchCommentsById from '../actions/comments.js';

class Comments extends React.Component {

    componentWillMount() {
        const { articleId } = this.props;
        this.props.fetchCommentsById(articleId);
    }

    render() {
        return (
            <div>
                <p>These are the comments</p>
                {this.props.loading ? <p>LOADING</p> : <p>{JSON.stringify(this.props.comments[0])}</p>}
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