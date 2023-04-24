import { createSlice } from '@reduxjs/toolkit';
import {
  createCommentThunk,
  updateCommentThunk,
  deleteCommentThunk,
  findCommentsThunk,
} from '../services/comments-thunks';

const initialState = {
  comments: [],
  loading: false,
};
const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  extraReducers: {
    [findCommentsThunk.pending]: (state) => {
      state.loading = true;
      state.comments = [];
    },
    [findCommentsThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.comments = payload;
    },
    [findCommentsThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [deleteCommentThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.comments = state.tuits.filter((c) => c._id !== payload);
    },
    [createCommentThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.comments.push(payload);
    },
    [updateCommentThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      const commentNdx = state.comments.findIndex((c) => c._id === payload._id);
      state.comments[commentNdx] = {
        ...state.comments[commentNdx],
        ...payload,
      };
    },
  },
  reducers: {},
});

export default commentsSlice.reducer;
