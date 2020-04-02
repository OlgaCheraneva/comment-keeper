import React from 'react';

import {CommentItem} from './CommentItem';

export const CommentList = ({comments, loading, deleteComment}) => {
    if (loading || comments === null) {
        return <p>Загрузка...</p>;
    }

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
