import React from 'react';
import Header from '../components/Header.js';
import LoginComponent from '../components/Login.js';

const LoginPage = () => {
  return (
    <>
      <Header />
      <main className='mx-auto my-0' style={{ maxWidth: 1280 }}>
        <div className='py-6 px-0 mt-16'>
          <LoginComponent />
        </div>
      </main>
    </>
  );
};

export default LoginPage;
