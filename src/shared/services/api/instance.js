import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
  headers: {
    common: {
      Authorization: '',
    },
  },
});

export default instance;
