import {
    GET_COMMENTS,
    ADD_COMMENT,
    DELETE_COMMENT,
    SET_LOADING,
    COMMENT_ERROR
} from '../actions/types';

const comments = (state, action) => {
    switch (action.type) {
        case GET_COMMENTS:
            return {
                ...state,
                comments: action.payload,
                loading: false
            };
        case ADD_COMMENT:
            return {
                ...state,
                comments: [action.payload, ...state.comments],
                loading: false
            };
        case DELETE_COMMENT:
            return {
                ...state,
                comments: state.comments.filter((c) => c.id !== action.payload),
                loading: false
            };
        case COMMENT_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
};

export default comments;
