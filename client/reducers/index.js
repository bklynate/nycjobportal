import { combineReducers } from 'redux';
import jobs from './jobsReducer';
import request from './requestReducer';
import singleJob from './singleJobReducer';

export default combineReducers({
  jobs,
  request,
  singleJob,
});
