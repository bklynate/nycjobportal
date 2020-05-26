import axios from 'axios';
import { FETCH_ALL_JOBS, FETCH_KEYWORD_JOBS } from './types';

const { baseURL } = process.env;

const axiosWithBaseURL = axios.create({
  baseURL,
});

export const fetchAllJobs = () => async dispatch => {
  const response = await axiosWithBaseURL.get('/api/get-all-jobs');
  await dispatch({ type: FETCH_ALL_JOBS, payload: response.data });
};

export const fetchKeywordJobs = keyword => async dispatch => {
  if (!keyword) return;
  const response = await axiosWithBaseURL.post('/api/get-jobs-by-keyword', {
    keyword,
  });
  // eslint-disable-next-line
  await dispatch({ type: FETCH_KEYWORD_JOBS, payload: response.data });
};
