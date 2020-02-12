import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { ajaxMiddleware } from './middleware';
import reducers from './reducers';

const middleware = [thunk, ajaxMiddleware];
const store = createStore(reducers, {}, applyMiddleware(...middleware));

export default store;
