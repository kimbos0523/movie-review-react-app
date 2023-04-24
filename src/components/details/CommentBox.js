import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useDetail } from '../../hooks';
import { createCommentThunk } from '../../services/comments-thunks';

const CommentBox = () => {
  const [comment, setComment] = useState('');
  const { currentUser } = useSelector((state) => state.authData);
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data } = useDetail(id ?? '');

  const commentClickHandler = () => {
    const newComment = {
      commenter: 'kimbos0523',
      movie: data.data.title,
      comment: comment,
    };
    dispatch(createCommentThunk(newComment));
  };

  return (
    <div className=''>
      <textarea
        value={comment}
        placeholder='Write Your Comment'
        onChange={(event) => setComment(event.target.value)}
      />
      <button onClick={commentClickHandler}>Comment</button>
    </div>
  );
};

export default CommentBox;
