import React from 'react';
import PropTypes from 'prop-types';

const CommentItem = ({comment, deleteComment}) => {
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

CommentItem.propTypes = {
    comment: PropTypes.object.isRequired,
    deleteComment: PropTypes.func.isRequired
};

export default CommentItem;
