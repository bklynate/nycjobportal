import {
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILED,
  FETCH_ALL_JOBS_START,
  FETCH_ALL_JOBS_SUCCESS,
  FETCH_ALL_JOBS_FAILED,
  FETCH_JOBS_BY_KEYWORD_START,
  FETCH_JOBS_BY_KEYWORD_SUCCESS,
  FETCH_JOBS_BY_KEYWORD_FAILED,
} from './types';

export const fetchUser = () => ({
  url: '/api/current_user',
  method: 'get',
  onStart: FETCH_USER_START,
  onSuccess: response => ({
    type: FETCH_USER_SUCCESS,
    payload: response.data,
  }),
  onFailure: FETCH_USER_FAILED,
});

export const fetchAllJobs = () => ({
  url: '/api/alljobs',
  method: 'get',
  onStart: FETCH_ALL_JOBS_START,
  onSuccess: response => ({
    type: FETCH_ALL_JOBS_SUCCESS,
    payload: response.data,
  }),
  onFailure: FETCH_ALL_JOBS_FAILED,
});

export const fetchKeywordJobs = (keyword = '') => ({
  url: '/api/getjobbykeyword',
  method: 'post',
  params: { keyword },
  onStart: FETCH_JOBS_BY_KEYWORD_START,
  onSuccess: response => ({
    type: FETCH_JOBS_BY_KEYWORD_SUCCESS,
    payload: response.data,
  }),
  onFailure: FETCH_JOBS_BY_KEYWORD_FAILED,
});
