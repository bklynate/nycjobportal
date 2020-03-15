import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const middleware = [thunk];
let mutableStore;

if (typeof window !== 'undefined') {
  mutableStore = createStore(
    reducers,
    window.INITIAL_STATE,
    compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f
    )
  );
} else {
  mutableStore = createStore(reducers, {}, applyMiddleware(...middleware));
}

const store = mutableStore;

export default store;
