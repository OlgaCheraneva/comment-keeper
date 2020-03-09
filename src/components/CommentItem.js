import React from 'react';

export const CommentItem = ({comment, deleteComment}) => {
    const {time, author, text} = comment;

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
                    onClick={() => deleteComment(comment)}
                >
                    Удалить
                </button>
            </div>
        </div>
    );
};
