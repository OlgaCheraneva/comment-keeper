import React, {useReducer} from 'react';

import CommentContext from './commentContext';
import CommentReducer from './commentReducer';
import {ADD_COMMENT, DELETE_COMMENT, SET_COMMENTS} from './types';

const CommentState = (props) => {
    const initialState = {
        comments: [],
        loading: true
    };

    const [state, dispatch] = useReducer(CommentReducer, initialState);

    const addComment = (comment) => {
        dispatch({type: ADD_COMMENT, payload: comment});
    };

    const deleteComment = (id) => {
        dispatch({type: DELETE_COMMENT, payload: id});
    };

    const readComments = () => {
        let comments = [];
        try {
            comments = JSON.parse(localStorage.comments);
        } catch (err) {
            console.log(err.message);
        }
        dispatch({type: SET_COMMENTS, payload: comments});
    };

    return (
        <CommentContext.Provider
            value={{
                comments: state.comments,
                loading: state.loading,
                addComment,
                deleteComment,
                readComments
            }}
        >
            {props.children}
        </CommentContext.Provider>
    );
};

export default CommentState;
