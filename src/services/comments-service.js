import axios from 'axios';

const SERVER_API_URL = 'http://localhost:4000/api';
const COMMENTS_URL = `${SERVER_API_URL}/comments`;

export const findComments = async () => {
  const response = await axios.get(COMMENTS_URL);
  const comments = response.data;
  return comments;
};

export const createComment = async (comment) => {
  const response = await axios.post(COMMENTS_URL, comment);
  return response.data;
};

export const deleteComment = async (cid) => {
  const response = await axios.delete(`${COMMENTS_URL}/${cid}`);
  return response.data;
};

export const updateComment = async (comment) => {
  const response = await axios.put(`${COMMENTS_URL}/${comment._id}`, comment);
  return response.data;
};
