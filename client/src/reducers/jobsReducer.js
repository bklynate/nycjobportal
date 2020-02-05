import {
  FETCH_ALL_JOBS_START,
  FETCH_ALL_JOBS_SUCCESS,
  FETCH_ALL_JOBS_FAILED,
} from './../actions/types';

const initialState = {
  isLoading: false,
  allJobs: [],
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
    default:
      return state;
  }
}
