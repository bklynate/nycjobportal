import { FETCH_KEYWORD_JOBS } from './../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_KEYWORD_JOBS:
      return action.payload || false;
    default:
      return state;
  }
}
