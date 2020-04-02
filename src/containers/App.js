import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {CommentForm} from '../components/CommentForm';
import {CommentList} from '../components/CommentList';
import {addComment, deleteComment, getComments} from '../actions';

import './App.css';

const App = (props) => {
    const {
        comments,
        loading,
        error,
        addComment,
        deleteComment,
        getComments
    } = props;

    useEffect(() => {
        getComments();
        // eslint-disable-next-line
    }, []);

    return (
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
                        <CommentList
                            comments={comments}
                            loading={loading}
                            deleteComment={deleteComment}
                        />
                    </div>
                )}
            </main>
        </div>
    );
};

App.propTypes = {
    state: PropTypes.object.isRequired,
    addComment: PropTypes.func.isRequired,
    deleteComment: PropTypes.func.isRequired,
    getComments: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    comments: state.comments,
    loading: state.loading,
    error: state.error
});

const mapDispatchToProps = (dispatch) => {
    return {
        addComment: (comment) => dispatch(addComment(comment)),
        deleteComment: (id) => dispatch(deleteComment(id)),
        getComments: () => dispatch(getComments())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
