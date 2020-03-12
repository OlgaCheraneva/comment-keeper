import React from 'react';

import CommentItem from './CommentItem';

const CommentList = ({comments, deleteComment}) => {
    if (!comments.length) {
        return <p>Список комментариев пуст</p>;
    }

    return (
        <ul>
            {comments.map((comment) => {
                return (
                    <li>
                        <CommentItem
                            key={comment.id}
                            comment={comment}
                            deleteComment={deleteComment}
                        />
                    </li>
                );
            })}
        </ul>
    );
};

export default CommentList;
