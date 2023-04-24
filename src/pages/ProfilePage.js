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

const ProfilePage = () => {
  const { currentUser } = useSelector((state) => state.authData);
  const [profile, setProfile] = useState(currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const save = () => {
    dispatch(updateUserThunk(profile));
  };

  const checkProfile = async () => {
    const { payload } = await dispatch(profileThunk());
    setProfile(payload);
  };

  useEffect(() => {
    checkProfile();
  }, []);

  // useEffect(() => {
  //   const { payload } = dispatch(profileThunk());
  //   setProfile(payload);
  // }, [dispatch, setProfile]);

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

              <div>
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
        </Container>
      </main>
    </>
  );
};

export default ProfilePage;
