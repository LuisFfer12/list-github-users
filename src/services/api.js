import axios from 'axios';

const api = axios.create({
  baseURL: 'https://list-github-users-backend.herokuapp.com/api',
});

export default api;
