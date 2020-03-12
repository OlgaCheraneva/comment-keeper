import React, {Component} from 'react';

class CommentForm extends Component {
    state = {author: '', text: ''};

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    onSubmit = (e) => {
        e.preventDefault();

        const time = Date.now();
        const {author, text} = this.state;
        const comment = {id: time, time, author, text};

        this.props.saveComment(comment);
        this.setState({author: '', text: ''});
    };

    render() {
        const {author, text} = this.state;

        return (
            <form onSubmit={this.onSubmit}>
                <input
                    type="text"
                    name="author"
                    value={author}
                    onChange={this.onChange}
                    placeholder="Автор"
                    required
                />
                <textarea
                    name="text"
                    cols="30"
                    rows="10"
                    value={text}
                    onChange={this.onChange}
                    placeholder="Комментарий"
                    required
                />
                <input
                    className="btn btn-primary btn-block"
                    type="submit"
                    value="Сохранить"
                />
            </form>
        );
    }
}

export default CommentForm;
