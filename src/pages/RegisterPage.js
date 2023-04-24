import React from 'react';
import Header from '../components/Header.js';
import RegisterComponent from '../components/Register.js';

const RegisterPage = () => {
  return (
    <>
      <Header />
      <main className='mx-auto my-0' style={{ maxWidth: 1280 }}>
        <div className='py-6 px-0 mt-16'>
          <RegisterComponent />
        </div>
      </main>
    </>
  );
};

export default RegisterPage;
