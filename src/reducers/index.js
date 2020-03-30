import {ADD_COMMENT, DELETE_COMMENT} from '../actions/types';

const comments = (state = [], action) => {
    switch (action.type) {
        case ADD_COMMENT:
            return [...state, action.payload];

        case DELETE_COMMENT:
            return state.filter((comment) => comment.id !== action.payload);

        default:
            return state;
    }
};

export default comments;
