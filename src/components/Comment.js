import React from 'react';

class Comment extends React.Component {

    render() {
        const {_id, belongs_to, body, created_at, created_by, votes} = this.props.commentObj;
        return (
            <div className="Comment">
                <p>This is a comment</p>
                <p>{created_at}</p>
                <p>{created_by}</p>
                <p>Belongs to{belongs_to}</p>
                <p>{body}</p>
                <p>{votes}</p>
            </div>

        );
    }
}



export default Comment;