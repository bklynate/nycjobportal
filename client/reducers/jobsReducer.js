import { FETCH_KEYWORD_JOBS, FETCH_SINGLE_JOB } from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_KEYWORD_JOBS:
      return { ...state, ...action.payload };
    case FETCH_SINGLE_JOB:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
