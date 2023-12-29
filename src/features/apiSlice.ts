import axios from 'axios';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getGithubToken } from '../common/utils/github-auth';
import { API_BASE_URL } from '../common/constants/base';

const BEARER = 'Bearer';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers) => {
      const token = getGithubToken();
      if (token) {
        headers.set('Authorization', `${BEARER} ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({}),
});

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = getGithubToken();
  if (token) {
    config.headers['Authorization'] = `${BEARER} ${token}`;
  }
  return config;
});

export { api };
