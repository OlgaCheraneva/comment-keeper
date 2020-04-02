import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import comments from './reducers';

const initialState = {
    comments: null,
    loading: false,
    error: null
};
const store = createStore(
    comments,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
