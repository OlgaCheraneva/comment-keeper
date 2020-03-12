import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

import App from './containers/App';
import comments from './reducers';
import {loadComments, saveComments} from './localStorage';

const store = createStore(comments, loadComments());

store.subscribe(() => {
    saveComments(store.getState());
});

ReactDOM.render(<App store={store} />, document.getElementById('root'));
