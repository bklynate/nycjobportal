import axios from 'axios';
import { FETCH_USER, FETCH_ALL_JOBS, FETCH_KEYWORD_JOBS } from './types';

const { baseURL } = process.env;

const axiosWithBaseURL = axios.create({
  baseURL,
});

export const fetchUser = () => async dispatch => {
  const response = await axiosWithBaseURL.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: response.data });
};

export const fetchAllJobs = () => async dispatch => {
  const response = await axiosWithBaseURL.get('/api/alljobs');
  dispatch({ type: FETCH_ALL_JOBS, payload: response.data });
};

export const fetchKeywordJobs = keyword => async dispatch => {
  if (!keyword) return;
  const response = await axiosWithBaseURL.post('/api/getjobbykeyword', {
    keyword,
  });
  dispatch({ type: FETCH_KEYWORD_JOBS, payload: response.data });
};
