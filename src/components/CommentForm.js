import React, {useContext, useState} from 'react';

import CommentContext from '../context/commentContext';

const CommentForm = () => {
    const commentContext = useContext(CommentContext);
    const {addComment} = commentContext;

    const initialState = {author: '', text: ''};
    const [state, setState] = useState(initialState);

    const onChange = (e) => {
        setState({...state, [e.target.name]: e.target.value});
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const time = Date.now();
        const {author, text} = state;
        const comment = {id: time, time, author, text};

        addComment(comment);
        setState(initialState);
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                name="author"
                value={state.author}
                onChange={onChange}
                placeholder="Автор"
                required
            />
            <textarea
                name="text"
                cols="30"
                rows="10"
                value={state.text}
                onChange={onChange}
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
