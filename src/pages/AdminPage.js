import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { findUsersThunk } from '../services/users-thunks';
import { findCommentsThunk } from '../services/comments-thunks';
import UserList from '../components/UserList';
import CommentList from '../components/CommentList';
import { logoutThunk } from '../services/auth-thunks';

const AdminPage = () => {
  const { users } = useSelector((state) => state.usersData);
  const { comments } = useSelector((state) => state.commentsData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(findUsersThunk());
    dispatch(findCommentsThunk());
  }, []);

  return (
    <>
      <div className='mb-3'>
        <Button
          className='float-right me-10'
          variant='light'
          onClick={() => {
            dispatch(logoutThunk());
            navigate('/login');
          }}
        >
          Logout
        </Button>
        <h1 className='w-8/12 mx-auto text-center my-4'>User List</h1>

        {users
          .filter((user) => user.role !== 'admin')
          .map((user) => (
            <UserList key={user._id} user={user}></UserList>
          ))}
        <h1 className='w-8/12 mx-auto text-center my-4'>Comment List</h1>
        {comments.map((comment) => (
          <CommentList key={comment._id} comment={comment}></CommentList>
        ))}
      </div>
    </>
  );
};

export default AdminPage;
