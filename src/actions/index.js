import {
    GET_COMMENTS,
    ADD_COMMENT,
    DELETE_COMMENT,
    SET_LOADING,
    COMMENT_ERROR
} from './types';
import LocalStorageAPI from '../api/LocalStorageAPI';
import store from '../store';

const localStorageAPI = new LocalStorageAPI();

export const getComments = () => async (dispatch) => {
    try {
        setLoading();

        const data = await localStorageAPI.getData();

        dispatch({
            type: GET_COMMENTS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: COMMENT_ERROR,
            payload: error
        });
    }
};

export const addComment = (comment) => async (dispatch) => {
    try {
        setLoading();

        await localStorageAPI.setData([comment, ...store.getState().comments]);

        dispatch({
            type: ADD_COMMENT,
            payload: comment
        });
    } catch (error) {
        dispatch({
            type: COMMENT_ERROR,
            payload: error
        });
    }
};

export const deleteComment = (id) => async (dispatch) => {
    try {
        setLoading();

        await localStorageAPI.setData(
            store.getState().comments.filter((comment) => comment.id !== id)
        );

        dispatch({
            type: DELETE_COMMENT,
            payload: id
        });
    } catch (error) {
        dispatch({
            type: COMMENT_ERROR,
            payload: error
        });
    }
};

export const setLoading = () => {
    return {
        type: SET_LOADING
    };
};
