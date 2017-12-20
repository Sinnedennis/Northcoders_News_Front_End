import React from 'react';

class Comment extends React.Component {

    render() {
        const {_id, belongs_to, body, created_at, created_by, votes} = this.props.commentObj;
        return (
            <div>
                <p>This is a comment</p>
                <p>{_id}</p>
                <p>{belongs_to}</p>
                <p>{body}</p>
                <p>{created_at}</p>
                <p>{created_by}</p>
                <p>{votes}</p>
            </div>

        );
    }
}



export default Comment;