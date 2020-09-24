import axios, { AxiosRequestConfig } from 'axios';

const axiosConfig: AxiosRequestConfig = {
  baseURL: '',
  headers: {
    'Content-Type': 'application/json',
  },
};

const api = axios.create(axiosConfig);

export default api;
