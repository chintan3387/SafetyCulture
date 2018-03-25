import axios from 'axios';

const dataApi = axios.create({
  baseURL: '//localhost:3001/',

  headers: {
    post: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  },
});

export default dataApi;
