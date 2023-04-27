import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useDetail } from '../../hooks';

const CommentItem = (props) => {
  const { isLoading, data } = useDetail(props.movie ?? '');
  console.log(data);
  const date = new Date(props.createdAt);
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  return (
    <li className='list-group-item border border-slate-300 mx-auto'>
      <Container className=''>
        <Row className='row'>
          <Col className='col-2 my-auto break-normal overflow-hidden'>
            <a
              className='no-underline text-black text-ellipsis'
              href={
                props.commenter.username === currentUser?.username
                  ? '/profile'
                  : `/profile/${props.commenter._id}`
              }
            >
              {props.commenter.username}
            </a>
          </Col>
          <Col className='col-2 my-auto text-ellipsis overflow-hidden'>
            <a
              className='no-underline text-black'
              href={`/details/${props.movie}`}
            >
              {data?.data.title}
            </a>
          </Col>
          <Col className='col-6 text-lg my-auto text-ellipsis overflow-hidden'>
            {props.comment}
          </Col>
          <Col className='col-2 text-sm my-auto text-ellipsis overflow-hidden'>
            {date.toLocaleString()}
          </Col>
        </Row>
      </Container>
    </li>
  );
};

export default CommentItem;
