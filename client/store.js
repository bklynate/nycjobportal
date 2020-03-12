import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import { ajaxMiddleware } from './middleware';
import reducers from './reducers';

const middleware = [thunk];
let mutableStore;

if (typeof window !== 'undefined') {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  mutableStore = createStore(
    reducers,
    window.INITIAL_STATE,
    composeEnhancers(applyMiddleware(...middleware))
  );
}

mutableStore = createStore(reducers, {}, applyMiddleware(...middleware));

const store = mutableStore;

export default store;
