import React, {Component} from 'react';
import './App.css';

import CommentForm from '../components/CommentForm';
import CommentList from '../components/CommentList';

export default class App extends Component {
    state = {comments: [], loading: true};

    componentDidMount() {
        let comments = [];
        try {
            comments = JSON.parse(localStorage.comments);
        } catch (err) {
            console.log(err.message);
        }
        this.setState({comments, loading: false});
    }

    saveComment = (comment) => {
        this.updateComments([...this.state.comments, comment]);
    };

    deleteComment = (id) => {
        const {comments} = this.state;

        this.updateComments(comments.filter((comment) => id !== comment.id));
    };

    updateComments = (comments) => {
        localStorage.comments = JSON.stringify(comments);
        this.setState({comments});
    };

    render() {
        const {comments, loading} = this.state;

        return (
            <div className="App">
                <header className="navbar bg-primary">
                    <h1>Comment Keeper</h1>
                </header>
                <div className="container grid-2">
                    <CommentForm saveComment={this.saveComment} />
                    {loading ? (
                        <div>Загрузка...</div>
                    ) : (
                        <CommentList
                            comments={comments}
                            deleteComment={this.deleteComment}
                        />
                    )}
                </div>
            </div>
        );
    }
}
