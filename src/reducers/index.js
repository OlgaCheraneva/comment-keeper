import {ADD_COMMENT, DELETE_COMMENT} from '../actions/types';

const comments = (state = [], action) => {
    switch (action.type) {
        case ADD_COMMENT:
            const {author, text} = action;
            const time = Date.now();

            return [...state, {id: time, time, author, text}];

        case DELETE_COMMENT:
            return state.filter((comment) => comment.id !== action.id);

        default:
            return state;
    }
};

export default comments;
