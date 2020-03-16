import React, {useContext, useEffect} from 'react';

import CommentItem from './CommentItem';
import CommentContext from '../context/commentContext';

const CommentList = () => {
    const commentContext = useContext(CommentContext);
    const {comments, loading, readComments} = commentContext;

    useEffect(() => {
        readComments();
    }, []);

    useEffect(() => {
        localStorage.setItem('comments', JSON.stringify(comments));
    }, [comments]);

    if (loading) {
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
                        <CommentItem key={comment.id} comment={comment} />
                    </li>
                );
            })}
        </ul>
    );
};

export default CommentList;
