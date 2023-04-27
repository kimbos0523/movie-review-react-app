import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../components/Header';
import { findCommentsThunk } from '../services/comments-thunks';
import CommentItem from '../components/details/CommentItem';
import { findUserByUserIdThunk } from '../services/users-thunks';

const ProfileOthersPage = () => {
  const { findUser } = useSelector((state) => state.usersData);
  console.log(findUser);
  const { comments, loading } = useSelector((state) => state.commentsData);
  const dispatch = useDispatch();
  const { id } = useParams();

  const profileComments = comments.filter(
    (comment) => comment.commenter._id === id
  );

  useEffect(() => {
    dispatch(findUserByUserIdThunk(id));
    dispatch(findCommentsThunk());
  }, []);

  return (
    <>
      <Header />
      <main className='mx-auto my-0' style={{ maxWidth: 1280 }}>
        <Container className='py-6 px-0 mt-16 bg-slate-300 '>
          <Row className='mb-8'>
            <Col>
              <h1 className='text-center text-4xl font-bold'>Profile Screen</h1>
            </Col>
          </Row>
          <Container>
            <Row className='w-8/12 mx-auto mb-3'>
              <Col>Username:</Col>
              <Col>{`${findUser?.firstName} ${findUser?.lastName}`}</Col>
            </Row>
            <Row className='w-8/12 mx-auto mb-3'>
              <Col>Email:</Col>
              <Col>{findUser?.email}</Col>
            </Row>
          </Container>

          {profileComments && (
            <ul className='mt-2 w-9/12 mx-auto'>
              {loading && <li className='list-group-item'>Loading...</li>}
              {profileComments.map((comment) => (
                <CommentItem
                  key={comments._id}
                  commenter={comment.commenter}
                  movie={comment.movie}
                  comment={comment.comment}
                  createdAt={comment.createdAt}
                />
              ))}
            </ul>
          )}
        </Container>
      </main>
    </>
  );
};

export default ProfileOthersPage;
