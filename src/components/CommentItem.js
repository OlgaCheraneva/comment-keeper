import React, {useContext} from 'react';

import CommentContext from '../context/commentContext';

const CommentItem = ({comment}) => {
    const commentContext = useContext(CommentContext);
    const {deleteComment} = commentContext;
    const {id, time, author, text} = comment;

    return (
        <div className="card grid-2">
            <div>
                <h3>Автор: {author}</h3>
                <p>{text}</p>
            </div>
            <div className="text-right">
                <span>{new Date(time).toLocaleString()}</span>
                <button
                    className="btn btn-danger my-1"
                    onClick={() => deleteComment(id)}
                >
                    Удалить
                </button>
            </div>
        </div>
    );
};

export default CommentItem;
