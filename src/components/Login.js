import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../services/auth-thunks';
import './Login.css';

const LoginComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      dispatch(loginThunk({ username, password }));
      username === 'admin' ? navigate('/admin') : navigate('/profile');
      // navigate('/profile');
    } catch (e) {
      alert(e);
    }
  };

  const handleRegister = async () => {
    navigate('/register');
  };

  return (
    <div className='login-form-container'>
      <h2 className='login-text mb-4'>Login</h2>
      <form className='login-form'>
        <div className='login-form-group'>
          <label className='login-form-label' htmlFor='usesrname'>
            User Name
          </label>
          <input
            className='login-form-input'
            placeholder='Your ID'
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className='login-form-group'>
          <label className='login-form-label' htmlFor='password'>
            Password
          </label>
          <input
            className='login-form-input'
            placeholder='Your Password'
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className='login-form-group'>
          <button
            className='login-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10 mr-10'
            onClick={handleLogin}
          >
            Login
          </button>
          <button
            className='login-btn mt-10 bg-white hover:bg-slate-200 text-black font-bold py-2 px-4 rounded'
            onClick={handleRegister}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginComponent;
