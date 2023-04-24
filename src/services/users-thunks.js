import { createAsyncThunk } from '@reduxjs/toolkit';
import * as usersService from './users-service';

export const findUsersThunk = createAsyncThunk('users/findUsers', async () => {
  const users = await usersService.findUsers();
  return users;
});

export const findUserByUserIdThunk = createAsyncThunk(
  'users/findUserByUserId',
  async (uid) => {
    const user = await usersService.findUserByUserId(uid);
    return user;
  }
);

export const createUserThunk = createAsyncThunk(
  'users/createUser',
  async (user) => {
    const newUser = await usersService.createUser(user);
    return newUser;
  }
);

export const updateUserThunk = createAsyncThunk(
  'users/updateUser',
  async (user) => {
    return await usersService.updateUser(user);
  }
);

export const deleteUserThunk = createAsyncThunk(
  'users/deleteUser',
  async (uid) => {
    await usersService.deleteUser(uid);
    return uid;
  }
);
