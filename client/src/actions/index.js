import axios from 'axios';
import { FETCH_USER, FETCH_ALL_JOBS, FETCH_KEYWORD_JOBS } from './types';

export const fetchUser = () => async dispatch => {
  const response = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: response.data });
};

export const fetchAllJobs = () => async dispatch => {
  const response = await axios.get('/api/alljobs');
  dispatch({ type: FETCH_ALL_JOBS, payload: response.data });
};

export const fetchKeywordJobs = (keyword = 'javascript') => async dispatch => {
  const response = await axios.post('/api/getjobbykeyword', { keyword });
  dispatch({ type: FETCH_KEYWORD_JOBS, payload: response.data });
};
