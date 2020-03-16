import React from 'react';

import CommentForm from '../components/CommentForm';
import CommentList from '../components/CommentList';
import CommentState from '../context/commentState';
import './App.css';

const App = () => {
    return (
        <CommentState>
            <div className="App">
                <header className="navbar bg-primary">
                    <h1>Comment Keeper</h1>
                </header>
                <div className="container grid-2">
                    <CommentForm />
                    <CommentList />
                </div>
            </div>
        </CommentState>
    );
};

export default App;
