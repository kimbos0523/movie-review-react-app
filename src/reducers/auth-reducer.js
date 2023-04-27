import { createSlice } from '@reduxjs/toolkit';
import {
  loginThunk,
  logoutThunk,
  registerThunk,
  profileThunk,
  updateUserThunk,
} from '../services/auth-thunks';

const authSlice = createSlice({
  name: 'auths',
  initialState: {
    currentUser: null,
  },
  extraReducers: {
    [loginThunk.fulfilled]: (state, { payload }) => {
      state.currentUser = payload;
      localStorage.setItem('currentUser', JSON.stringify(state.currentUser));
    },
    [logoutThunk.fulfilled]: (state) => {
      state.currentUser = null;
      localStorage.setItem('currentUser', JSON.stringify(state.currentUser));
    },
    [profileThunk.fulfilled]: (state, { payload }) => {
      state.currentUser = payload;
      localStorage.setItem('currentUser', JSON.stringify(state.currentUser));
    },
    [updateUserThunk.fulfilled]: (state, { payload }) => {
      state.currentUser = payload;
      localStorage.setItem('currentUser', JSON.stringify(state.currentUser));
    },
    [registerThunk.fulfilled]: (state, { payload }) => {
      state.currentUser = null;
      localStorage.setItem('currentUser', JSON.stringify(state.currentUser));
    },
  },
  reducers: {},
});

export default authSlice.reducer;
