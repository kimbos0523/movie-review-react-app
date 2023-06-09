import { createSlice } from '@reduxjs/toolkit';
import {
  createUserThunk,
  updateUserThunk,
  deleteUserThunk,
  findUsersThunk,
  findUserByUserIdThunk,
  findUserByUserNameThunk,
} from '../services/users-thunks';

const initialState = {
  findUser: null,
  users: [],
};
const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: {
    [findUsersThunk.fulfilled]: (state, { payload }) => {
      state.users = payload;
    },
    [findUserByUserIdThunk.fulfilled]: (state, { payload }) => {
      state.findUser = payload;
    },
    [findUserByUserNameThunk.fulfilled]: (state, { payload }) => {
      state.users = payload;
      console.log(payload);
      console.log(state.users);
    },
    [deleteUserThunk.fulfilled]: (state, { payload }) => {
      state.users = state.users.filter((u) => u._id !== payload);
    },
    [createUserThunk.fulfilled]: (state, { payload }) => {
      state.users.push(payload);
    },
    [updateUserThunk.fulfilled]: (state, { payload }) => {
      const userNdx = state.users.findIndex((u) => u._id === payload._id);
      state.users[userNdx] = {
        ...state.users[userNdx],
        ...payload,
      };
    },
  },
  reducers: {},
});

export default usersSlice.reducer;
