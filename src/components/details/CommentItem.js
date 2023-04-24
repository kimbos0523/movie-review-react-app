import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findUserByUserIdThunk } from '../../services/users-thunks';
import { Container, Row, Col } from 'react-bootstrap';

const CommentItem = (props) => {
  const { findUser } = useSelector((state) => state.usersData);
  const dispatch = useDispatch();
  const date = new Date(props.createdAt);
  useEffect(() => {
    const commenter = props.commenter;
    dispatch(findUserByUserIdThunk(commenter));
  }, []);

  return (
    <li className='list-group-item border border-slate-300 mx-auto'>
      <Container className=''>
        <Row className='row'>
          <Col className='col-3 my-auto'>{findUser.username}</Col>
          <Col className='col-6 text-lg my-auto'>{props.comment}</Col>
          <Col className='col-3 text-sm my-auto'>{date.toLocaleString()}</Col>
        </Row>
      </Container>
    </li>
  );
};

export default CommentItem;
