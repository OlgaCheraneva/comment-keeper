import React from 'react';

export const CommentForm = ({addComment}) => {
    let authorInputElem, textInputElem;

    const onSubmit = (e) => {
        e.preventDefault();

        const author = authorInputElem.value.trim();
        const text = textInputElem.value.trim();

        if (!author || !text) return;

        const time = new Date();

        addComment({id: time, time, author, text});

        authorInputElem.value = '';
        textInputElem.value = '';
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                name="author"
                ref={(node) => (authorInputElem = node)}
                placeholder="Автор"
                required
            />
            <textarea
                name="text"
                cols="30"
                rows="10"
                ref={(node) => (textInputElem = node)}
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
