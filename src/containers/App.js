import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {createSelector} from 'reselect';
import {connect} from 'react-redux';

import CommentForm from '../components/CommentForm';
import CommentList from './CommentList';
import {addComment, getComments} from '../actions';
import store from '../store';

import './App.css';

const App = ({error, addComment, getComments}) => {
    useEffect(() => {
        getComments();
        // eslint-disable-next-line
    }, []);

    return (
        <Provider store={store}>
            <div className="App">
                <header className="navbar bg-primary">
                    <h1>Comment Keeper</h1>
                </header>
                <main>
                    {error ? (
                        <p className="text-center">{error}</p>
                    ) : (
                        <div className="container grid-2">
                            <CommentForm addComment={addComment} />
                            <CommentList />
                        </div>
                    )}
                </main>
            </div>
        </Provider>
    );
};

App.propTypes = {
    error: PropTypes.string,
    addComment: PropTypes.func.isRequired,
    getComments: PropTypes.func.isRequired
};

const getError = createSelector(
    (state) => state.error,
    (error) => error
);

const mapStateToProps = (state) => ({
    error: getError(state)
});

export default connect(mapStateToProps, {addComment, getComments})(App);
