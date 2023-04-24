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
    },
    [logoutThunk.fulfilled]: (state) => {
      state.currentUser = null;
    },
    [profileThunk.fulfilled]: (state, { payload }) => {
      state.currentUser = payload;
    },
    [updateUserThunk.fulfilled]: (state, { payload }) => {
      state.currentUser = payload;
    },
    [registerThunk.fulfilled]: (state, { payload }) => {
      state.currentUser = payload;
    },
  },
  reducers: {},
});

export default authSlice.reducer;
