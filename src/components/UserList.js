import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { updateUserThunk } from '../services/auth-thunks';
import { deleteUserThunk } from '../services/users-thunks';

const UserList = ({ user }) => {
  const [profile, setProfile] = useState(user);
  const dispatch = useDispatch();
  const saveUser = () => {
    dispatch(updateUserThunk(profile));
  };

  const deleteUser = (uid) => {
    dispatch(deleteUserThunk(uid));
  };

  return (
    <div className='Container w-8/12 mx-auto border-2'>
      <div className='mb-2'>
        <label className='me-3'>Username: </label>
        <input
          type='text'
          value={profile.username}
          onChange={(event) => {
            const newProfile = {
              ...profile,
              username: event.target.value,
            };
            setProfile(newProfile);
          }}
        />
      </div>
      <div className='mb-2'>
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
      <div className='mb-2'>
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
      <div className='mb-2'>
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
      <div className='mb-2'>
        <label className='me-3'>email: </label>
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
      <div className='mb-2'>
        <label className='me-3'>Role: </label>
        <select
          value={profile.role}
          onChange={(event) => {
            const newProfile = {
              ...profile,
              role: event.target.value,
            };
            setProfile(newProfile);
          }}
        >
          <option value='admin'>admin</option>
          <option value='user'>user</option>
          <option value='guest'>guest</option>
        </select>
      </div>
      <Container>
        <Row className='mt-3 w-8/12 mx-auto' xs='auto'>
          <Col className=''>
            <Button variant='primary' onClick={() => saveUser()}>
              Save
            </Button>
          </Col>
          <Col>
            <Button variant='light' onClick={() => deleteUser(user._id)}>
              Delete
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserList;
