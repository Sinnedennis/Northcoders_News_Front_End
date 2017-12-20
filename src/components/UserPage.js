import React from 'react';
import { connect } from 'react-redux';
import fetchUser from '../actions/user';

class UserPage extends React.Component {

    componentWillMount() {
        const { userName } = this.props.match.params;
        this.props.fetchUser(userName);
    }

    render() {
        const {_id, avatar_url, name, username} = this.props.user;
        return (
            <div>
               <p>I am a user page.</p>
               <p>{_id}</p>
               <p>{avatar_url}</p>
               <p>{name}</p>
               <p>{username}</p>
            </div>

        );
    }
}

const mapStateToProps = state => ({
    user: state.user.data,
    loading: state.user.loading,
    error: state.user.error
});
const mapDispatchToProps = dispatch => ({
    fetchUser: (userName) => {
        dispatch(fetchUser(userName));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);