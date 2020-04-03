import React from 'react';
import PropTypes from 'prop-types';
import {createSelector} from 'reselect';
import {connect} from 'react-redux';

import CommentItem from '../components/CommentItem';
import {deleteComment} from '../actions/index';

const CommentList = ({comments, loading, deleteComment}) => {
    if (loading || comments === null) {
        return <p>Загрузка...</p>;
    }

    if (!comments.length) {
        return <p>Список комментариев пуст</p>;
    }

    return (
        <ul>
            {comments.map((comment) => {
                return (
                    <li key={comment.id}>
                        <CommentItem
                            comment={comment}
                            deleteComment={deleteComment}
                        />
                    </li>
                );
            })}
        </ul>
    );
};

CommentList.propTypes = {
    comments: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    deleteComment: PropTypes.func.isRequired
};

const getComments = createSelector(
    (state) => state.comments,
    (comments) => comments
);

const getLoading = createSelector(
    (state) => state.loading,
    (loading) => loading
);

const mapStateToProps = (state) => {
    return {
        comments: getComments(state),
        loading: getLoading(state)
    };
};

export default connect(mapStateToProps, {deleteComment})(CommentList);
