import React from 'react';
import {connect} from 'react-redux';

import {CommentForm} from '../components/CommentForm';
import {CommentList} from '../components/CommentList';
import {addComment, deleteComment} from '../actions';

import './App.css';

let App = (props) => {
    const {comments, addComment, deleteComment} = props;

    return (
        <div className="App">
            <header className="navbar bg-primary">
                <h1>Comment Keeper</h1>
            </header>
            <div className="container grid-2">
                <CommentForm addComment={addComment} />
                <CommentList
                    comments={comments}
                    deleteComment={deleteComment}
                />
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        comments: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addComment: (comment) => dispatch(addComment(comment)),
        deleteComment: (id) => dispatch(deleteComment(id))
    };
};

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
