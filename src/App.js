import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import MainPage from './pages/MainPage.js';
import MovieDetailPage from './pages/MovieDetailPage.js';
import SearchPage from './pages/SearchPage.js';
import LoginPage from './pages/LoginPage.js';
import RegisterPage from './pages/RegisterPage.js';
import ProfilePage from './pages/ProfilePage.js';
import ProfileOthersPage from './pages/ProfileOthersPage.js';
import AdminPage from './pages/AdminPage.js';
import authReducer from './reducers/auth-reducer.js';
import commentsReducer from './reducers/comments-reducer.js';
import usersReducer from './reducers/users-reducer.js';

function App() {
  const store = configureStore({
    reducer: {
      authData: authReducer,
      commentsData: commentsReducer,
      usersData: usersReducer,
    },
  });

  return (
    <Provider store={store}>
      <div>
        <Router>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/details/:id' element={<MovieDetailPage />} />
            <Route path='/search/*' element={<SearchPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/profile/:id' element={<ProfileOthersPage />} />
            <Route path='/admin' element={<AdminPage />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
