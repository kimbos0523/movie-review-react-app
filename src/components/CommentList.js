import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Col, Row, Button } from 'react-bootstrap';
import {
  deleteCommentThunk,
  updateCommentThunk,
} from '../services/comments-thunks';
import { useDetail } from '../hooks';

const CommentList = ({ comment }) => {
  const [comm, setComm] = useState(comment);
  const { data } = useDetail(comment.movie ?? '');
  const dispatch = useDispatch();

  const saveComment = () => {
    dispatch(updateCommentThunk(comm));
  };

  const deleteComment = (cid) => {
    dispatch(deleteCommentThunk(cid));
  };

  return (
    <div className='Container w-8/12 mx-auto border-2'>
      <div className='mb-2'>
        <label className='me-3'>Commenter: </label>
        <input
          type='text'
          value={comm.commenter.username}
          onChange={(event) => {
            const newComment = {
              ...comm,
              commenter: event.target.value,
            };
            setComm(newComment);
          }}
        />
      </div>
      <div className='mb-2'>
        <label className='me-3'>Movie: </label>
        <input type='text' value={data?.data.title} disabled />
      </div>
      <div className='mb-2'>
        <label className='me-3'>Comment: </label>
        <input
          type='text'
          value={comm.comment}
          onChange={(event) => {
            const newComment = {
              ...comm,
              comment: event.target.value,
            };
            setComm(newComment);
          }}
        />
      </div>
      <div className='mb-2'>
        <label className='me-3'>Created At: </label>
        <input type='text' value={comm.createdAt} disabled />
      </div>
      <Container>
        <Row className='mt-3 w-8/12 mx-auto' xs='auto'>
          <Col className=''>
            <Button variant='primary' onClick={() => saveComment()}>
              Save
            </Button>
          </Col>
          <Col>
            <Button variant='light' onClick={() => deleteComment(comment._id)}>
              Delete
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CommentList;
