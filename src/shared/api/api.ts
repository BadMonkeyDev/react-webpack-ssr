import axios from 'axios';

export const $api = axios.create({
  baseURL: __API__,
  headers: {
    Accept: 'application/json',
  },
  withCredentials: true,
});

$api.interceptors.response.use(
  (response) => response,
  async (error) => Promise.reject(error),
);

$api.interceptors.request.use(async (config) => config, (err) => Promise.reject(err));
