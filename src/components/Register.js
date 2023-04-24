import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { registerThunk } from '../services/auth-thunks';

const RegisterComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  // const [role, setRole] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = () => {
    const user = {
      username: username,
      password: password,
      email: email,
      firstName: firstName,
      lastName: lastName,
      // role: role,
    };
    console.log(user);
    dispatch(registerThunk(user));
    navigate('/login');
  };

  return (
    <div className='login-form-container'>
      <h2 className='login-text mb-4'>Register</h2>
      <form className='login-form'>
        <div className='login-form-group'>
          <label className='login-form-label' htmlFor='username'>
            User ID
          </label>
          <input
            className='login-form-input'
            placeholder='Your ID'
            onChange={(event) => setUsername(event.target.value)}
            required
          ></input>
        </div>
        <div className='login-form-group'>
          <label className='login-form-label' htmlFor='password'>
            Password
          </label>
          <input
            className='login-form-input'
            placeholder='Your Password'
            onChange={(event) => setPassword(event.target.value)}
            required
          ></input>
        </div>
        <div className='login-form-group'>
          <label className='login-form-label' htmlFor='firstName'>
            First Name
          </label>
          <input
            className='login-form-input'
            placeholder='First Name'
            onChange={(event) => setFirstName(event.target.value)}
            required
          ></input>
        </div>
        <div className='login-form-group'>
          <label className='login-form-label' htmlFor='email'>
            Last Name
          </label>
          <input
            className='login-form-input'
            placeholder='Last Name'
            onChange={(event) => setLastName(event.target.value)}
            required
          ></input>
        </div>
        <div className='login-form-group'>
          <label className='login-form-label' htmlFor='email'>
            Email
          </label>
          <input
            className='login-form-input'
            placeholder='Email'
            onChange={(event) => setEmail(event.target.value)}
            required
          ></input>
        </div>
        <div className='login-form-group'>
          {/* <label className='login-form-label' htmlFor='roles'>
            Choose a role:
          </label> */}
          {/* <select
            name='roles'
            className='login-form-input'
            onChange={(event) => setRole(event.target.value)}
            required
          >
            <option value='none'>Select Your Role</option>
            <option value='user'>User</option>
            <option value='admin'>Admin</option>
            <option value='guest'>Guest</option>
            <option value='moderator'>Moderator</option>
          </select> */}
        </div>

        <div className='login-form-group'>
          <button
            className='login-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10 mr-10'
            onClick={handleRegister}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterComponent;
