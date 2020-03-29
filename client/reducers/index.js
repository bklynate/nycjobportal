import { combineReducers } from 'redux';
import jobs from './jobsReducer';
import request from './requestReducer';

export default combineReducers({
  jobs,
  request,
});
