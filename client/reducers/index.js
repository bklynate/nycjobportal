import { combineReducers } from 'redux';
import authReducer from './authReducer';
import jobsReducer from './jobsReducer';

export default combineReducers({
  auth: authReducer,
  jobs: jobsReducer,
});
