import {
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILED,
} from '../actions/types';

const initialState = {
  isLoading: false,
  user: null,
  error: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_START:
      return { ...state, isLoading: true };
    case FETCH_USER_SUCCESS:
      return { ...state, isLoading: false, user: action.payload };
    case FETCH_USER_FAILED:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
}
