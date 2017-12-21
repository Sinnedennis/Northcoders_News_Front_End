import React from 'react';
import Votes from './Votes';

class Comment extends React.Component {

    render() {
        const {_id, belongs_to, body, created_at, created_by, votes} = this.props.commentObj;
        return (
            <div className="Comment">
                <p>This is a comment</p>
                <p>id: {_id}</p>
                <p>{created_at}</p>
                <p>{created_by}</p>
                <p>Belongs to{belongs_to}</p>
                <p>{body}</p>
                <Votes parentObj={this.props.commentObj} voteTarget={'comments'}/>
                <p>{votes}</p>
            </div>

        );
    }
}



export default Comment;