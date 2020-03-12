import {ADD_COMMENT, DELETE_COMMENT} from './types';

export const addComment = ({author, text}) => {
    return {
        type: ADD_COMMENT,
        author,
        text
    };
};

export const deleteComment = (id) => {
    return {
        type: DELETE_COMMENT,
        id
    };
};
