import React, {useContext, useState} from 'react';

import CommentContext from '../context/commentContext';

const CommentForm = () => {
    const commentContext = useContext(CommentContext);
    const {addComment} = commentContext;

    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');

    const onAuthorChange = (e) => {
        setAuthor(e.target.value);
    };

    const onTextChange = (e) => {
        setText(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const time = Date.now();
        const comment = {id: time, time, author, text};

        addComment(comment);
        setAuthor('');
        setText('');
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                name="author"
                value={author}
                onChange={onAuthorChange}
                placeholder="Автор"
                required
            />
            <textarea
                name="text"
                cols="30"
                rows="10"
                value={text}
                onChange={onTextChange}
                placeholder="Комментарий"
                required
            />
            <input
                className="btn btn-primary btn-block"
                type="submit"
                value="Сохранить"
            />
        </form>
    );
};

export default CommentForm;
