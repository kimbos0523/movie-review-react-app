import axios from 'axios';

const Instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE}/3`,
  params: {
    api_key: process.env.REACT_APP_API_KEY,
  },
});

export default Instance;
