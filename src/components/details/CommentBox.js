import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { Form, Button } from 'react-bootstrap';
import { createCommentThunk } from '../../services/comments-thunks';

const CommentBox = (props) => {
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();
  const { id } = useParams();
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  const commentClickHandler = () => {
    const newComment = {
      commenter: currentUser.username,
      movie: id,
      comment: comment,
      createdAt: Date.now(),
    };
    dispatch(createCommentThunk(newComment));
  };

  return (
    <Form className='w-8/12 mx-auto'>
      <Form.Group className='w-full '>
        <Form.Label>{`${currentUser.username} comment:`}</Form.Label>
        <Form.Control
          as='textarea'
          className='mb-3'
          value={comment}
          placeholder='Write Your Comment'
          onChange={(event) => setComment(event.target.value)}
        />
        <Button variant='primary' onClick={commentClickHandler}>
          Comment
        </Button>
      </Form.Group>
    </Form>
  );
};

export default CommentBox;
