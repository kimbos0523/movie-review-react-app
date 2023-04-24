import { createAsyncThunk } from '@reduxjs/toolkit';
import * as commentService from './comments-service';

export const findCommentsThunk = createAsyncThunk(
  'comments/findComments',
  async () => {
    const comments = await commentService.findComments();
    return comments;
  }
);

export const deleteCommentThunk = createAsyncThunk(
  'comments/deleteComment',
  async (cid) => {
    await commentService.deleteComment(cid);
    return cid;
  }
);

export const createCommentThunk = createAsyncThunk(
  'comments/createComment',
  async (comment) => {
    const newComment = await commentService.createComment(comment);
    return newComment;
  }
);

export const updateCommentThunk = createAsyncThunk(
  'comments/updateComment',
  async (comment) => {
    return await commentService.updateComment(comment);
  }
);
