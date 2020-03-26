import axios from 'axios';
import { isEmptyObject } from '../../util/isEmptyObject';
import { FETCH_USER, FETCH_ALL_JOBS, FETCH_KEYWORD_JOBS } from './types';

const { baseURL } = process.env;

const axiosWithBaseURL = axios.create({
  baseURL,
});

// eslint-disable-next-line
export const fetchUser = (userToken, user) => async dispatch => {
  const isUserPresent = !isEmptyObject(user);
  if (isUserPresent) {
    const auth = { user };
    return dispatch({ type: FETCH_USER, payload: auth });
  }
  const response = await axiosWithBaseURL.get('/api/current_user');
  await dispatch({ type: FETCH_USER, payload: response.data });
};

export const fetchAllJobs = () => async dispatch => {
  const response = await axiosWithBaseURL.get('/api/alljobs');
  await dispatch({ type: FETCH_ALL_JOBS, payload: response.data });
};

export const fetchKeywordJobs = keyword => async dispatch => {
  if (!keyword) return;
  const response = await axiosWithBaseURL.post('/api/getjobbykeyword', {
    keyword,
  });
  // eslint-disable-next-line
  await dispatch({ type: FETCH_KEYWORD_JOBS, payload: response.data });
};
