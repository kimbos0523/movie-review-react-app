import axios from 'axios';

const SERVER_API_URL = 'http://localhost:4000/api';
const USERS_URL = `${SERVER_API_URL}/users`;

export const findUsers = async () => {
  const response = await axios.get(USERS_URL);
  const users = response.data;
  return users;
};

export const createUser = async (user) => {
  const response = await axios.post(USERS_URL, user);
  return response.data;
};

export const findUserByUserId = async (uid) => {
  const response = await axios.get(`${USERS_URL}/${uid}`);
  const user = response.data;
  return user;
};

export const findUserByUserName = async (username) => {
  const response = await axios.get(`${USERS_URL}/username/${username}`);
  console.log('findUserByUserName');
  const users = response.data;
  console.log(users);
  return users;
};

export const deleteUser = async (uid) => {
  const response = await axios.delete(`${USERS_URL}/${uid}`);
  return response.data;
};

export const updateUser = async (user) => {
  const response = await axios.put(`${USERS_URL}/${user._id}`, user);
  return response.data;
};
