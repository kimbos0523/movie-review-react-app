import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Header from '../components/Header';
import {
  profileThunk,
  logoutThunk,
  updateUserThunk,
} from '../services/auth-thunks';
import { findCommentsThunk } from '../services/comments-thunks';
import CommentItem from '../components/details/CommentItem';

const ProfilePage = () => {
  const { currentUser } = useSelector((state) => ({
    currentUser: state.authData.currentUser,
  }));
  const { comments, loading } = useSelector((state) => state.commentsData);
  const [profile, setProfile] = useState(currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const profileComments = comments.filter(
    (comment) => comment.commenter._id === currentUser?._id
  );

  useEffect(() => {
    dispatch(findCommentsThunk());
  }, []);

  const save = () => {
    dispatch(updateUserThunk(profile));
  };

  useEffect(() => {
    (async () => {
      const { payload } = await dispatch(profileThunk());
      setProfile(payload);
    })();
  }, []);

  useEffect(() => {
    dispatch(findCommentsThunk());
  }, [setProfile]);

  console.log(comments);
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
          {profile && (
            <div className='Container w-8/12 mx-auto'>
              <div className='mb-3'>
                <label className='me-3'>First Name: </label>
                <input
                  type='text'
                  value={profile.firstName}
                  onChange={(event) => {
                    const newProfile = {
                      ...profile,
                      firstName: event.target.value,
                    };
                    setProfile(newProfile);
                  }}
                />
              </div>
              <div className='mb-3'>
                <label className='me-3'>Last Name: </label>
                <input
                  type='text'
                  value={profile.lastName}
                  onChange={(event) => {
                    const newProfile = {
                      ...profile,
                      lastName: event.target.value,
                    };
                    setProfile(newProfile);
                  }}
                />
              </div>
              <div className='mb-3'>
                <label className='me-3'>Email: </label>
                <input
                  type='text'
                  value={profile.email}
                  onChange={(event) => {
                    const newProfile = {
                      ...profile,
                      email: event.target.value,
                    };
                    setProfile(newProfile);
                  }}
                />
              </div>
              <div className='mb-3'>
                <label className='me-3'>Password: </label>
                <input
                  type='text'
                  value={profile.password}
                  onChange={(event) => {
                    const newProfile = {
                      ...profile,
                      password: event.target.value,
                    };
                    setProfile(newProfile);
                  }}
                />
              </div>
            </div>
          )}
          <Row className='mt-3 w-8/12 mx-auto' xs='auto'>
            <Col>
              <Button
                variant='light'
                onClick={() => {
                  dispatch(logoutThunk());
                  navigate('/login');
                }}
              >
                Logout
              </Button>
            </Col>
            <Col className=''>
              <Button variant='primary' onClick={save}>
                Save
              </Button>
            </Col>
          </Row>
          {profileComments && (
            <ul className='mt-2 w-9/12 mx-auto'>
              {loading && <li className='list-group-item'>Loading...</li>}
              {profileComments.map(
                (comment) => (
                  console.log(comment.movie),
                  console.log(typeof comment.movie),
                  (
                    <CommentItem
                      key={comments._id}
                      commenter={comment.commenter}
                      movie={comment.movie}
                      comment={comment.comment}
                      createdAt={comment.createdAt}
                    />
                  )
                )
              )}
            </ul>
          )}
        </Container>
      </main>
    </>
  );
};

export default ProfilePage;
