import React from 'react';

export const CommentForm = ({addComment}) => {
    let authorInputRef, textInputRef, formRef;

    const onSubmit = (e) => {
        e.preventDefault();

        const author = authorInputRef.value.trim();
        const text = textInputRef.value.trim();

        if (!author || !text) return;

        const time = new Date();

        addComment({id: time, time, author, text});

        formRef.reset();
    };

    return (
        <form onSubmit={onSubmit} ref={(node) => (formRef = node)}>
            <input
                type="text"
                name="author"
                ref={(node) => (authorInputRef = node)}
                placeholder="Автор"
                required
            />
            <textarea
                name="text"
                cols="30"
                rows="10"
                ref={(node) => (textInputRef = node)}
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
