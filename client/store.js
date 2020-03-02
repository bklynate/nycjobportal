import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { ajaxMiddleware } from './middleware';
import reducers from './reducers';

const middleware = [thunk, ajaxMiddleware];

let mutableStore;

if (typeof window !== 'undefined') {
  mutableStore = createStore(
    reducers,
    window.INITIAL_STATE,
    applyMiddleware(...middleware)
  );
}

mutableStore = createStore(reducers, {}, applyMiddleware(...middleware));

const store = mutableStore;

export default store;
