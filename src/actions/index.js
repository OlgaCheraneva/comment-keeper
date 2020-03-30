import {ADD_COMMENT, DELETE_COMMENT} from './types';

export const addComment = (comment) => {
    return {
        type: ADD_COMMENT,
        payload: comment
    };
};

export const deleteComment = (id) => {
    return {
        type: DELETE_COMMENT,
        payload: id
    };
};
