import React from 'react';

import {CommentItem} from './CommentItem';

export const CommentList = ({comments, deleteComment}) => {
    if (comments.length === 0) {
        return <p>Список комментариев пуст</p>;
    }

    return (
        <ul>
            {comments.map((comment, i) => {
                return (
                    <li>
                        <CommentItem
                            key={i}
                            comment={comment}
                            deleteComment={deleteComment}
                        />
                    </li>
                );
            })}
        </ul>
    );
};
