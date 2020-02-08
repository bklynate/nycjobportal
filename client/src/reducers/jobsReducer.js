import {
  FETCH_ALL_JOBS_START,
  FETCH_ALL_JOBS_SUCCESS,
  FETCH_ALL_JOBS_FAILED,
  FETCH_JOBS_BY_KEYWORD_START,
  FETCH_JOBS_BY_KEYWORD_SUCCESS,
  FETCH_JOBS_BY_KEYWORD_FAILED,
} from '../actions/types';

const initialState = {
  isLoading: false,
  allJobs: [],
  searchJobKeywords: [],
  error: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_JOBS_START:
      return { ...state, isLoading: true };
    case FETCH_ALL_JOBS_SUCCESS:
      return { ...state, isLoading: false, allJobs: action.payload };
    case FETCH_ALL_JOBS_FAILED:
      return { ...state, isLoading: false, error: action.payload };
    case FETCH_JOBS_BY_KEYWORD_START:
      return { ...state, isLoading: true };
    case FETCH_JOBS_BY_KEYWORD_SUCCESS:
      return { ...state, isLoading: false, searchJobKeywords: action.payload };
    case FETCH_JOBS_BY_KEYWORD_FAILED:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
}
