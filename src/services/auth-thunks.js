import { createAsyncThunk } from '@reduxjs/toolkit';
import * as authService from './auth-service';
import * as userService from './users-service';

export const loginThunk = createAsyncThunk(
  'user/login',
  async (credentials) => {
    const user = await authService.login(credentials);
    return user;
  }
);

export const logoutThunk = createAsyncThunk('auth/logout', async () => {
  return await authService.logout();
});

export const updateUserThunk = createAsyncThunk(
  'user/updateUser',
  async (user) => {
    return await userService.updateUser(user);
  }
);

export const profileThunk = createAsyncThunk('auth/profile', async () => {
  return await authService.profile();
});

export const registerThunk = createAsyncThunk(
  'users/register',
  async (user) => {
    await userService.createUser(user);
    return user;
  }
);
