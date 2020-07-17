/* eslint-disable import/no-cycle */
import axios from 'axios';
import store from '../store';

export default () => {
  return axios.create({
    baseURL: 'http://localhost:3333/api',
    timeout: 5000,
    headers: {
      Authorization: `Bearer ${store.state.authentication.token}`,
      'Content-Type': 'application/json',
    },
  });
};
