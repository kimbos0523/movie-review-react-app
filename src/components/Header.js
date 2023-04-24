import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <nav className='header-nav'>
        <div className='header-menus-container'>
          <ul className='header-menus'>
            <li className='header-menu'>
              <a className='no-underline' href='/'>
                <h1 className='header-logo'>
                  <span className='text-red-600'>MOVIE</span>
                  <span className=''>REVIEW</span>
                </h1>
              </a>
            </li>
            <li className='header-menu margin-left-auto'>
              <Link to='/search'>
                <button className='header-menu-btn'>Search</button>
              </Link>
            </li>
            <li className='header-menu'>
              <Link to='/profile'>
                <button className='header-menu-btn'>Profile</button>
              </Link>
            </li>
            <li className='header-menu'>
              <Link to='/login'>
                <button className='header-btn-login'>Log In</button>
              </Link>
            </li>
            <li className='header-menu'>
              <Link to='/register'>
                <button className='header-btn-signup'>Register</button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
