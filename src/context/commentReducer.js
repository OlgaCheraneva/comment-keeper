import {ADD_COMMENT, DELETE_COMMENT, SET_LOADING, SET_COMMENTS} from './types';

export default (state, action) => {
    switch (action.type) {
        case ADD_COMMENT:
            return {
                ...state,
                comments: [...state.comments, action.payload]
            };
        case DELETE_COMMENT:
            return {
                ...state,
                comments: state.comments.filter(
                    (comment) => comment.id !== action.payload
                )
            };
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload
            };
        case SET_COMMENTS:
            return {
                ...state,
                comments: action.payload,
                loading: false
            };
        default:
            return state;
    }
};
