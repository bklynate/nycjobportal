import axios from 'axios';
import { FETCH_ALL_JOBS, FETCH_KEYWORD_JOBS, FETCH_SINGLE_JOB } from './types';

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

  await dispatch({ type: FETCH_KEYWORD_JOBS, payload: response.data });
};

export const fetchSingleJob = (jobID, jobPostingType) => async dispatch => {
  if (!jobID || !jobPostingType) return;

  const response = await axiosWithBaseURL.post('/api/get-single-job-listing', {
    jobID,
    jobPostingType,
  });

  await dispatch({ type: FETCH_SINGLE_JOB, payload: response.data[0] });
};
