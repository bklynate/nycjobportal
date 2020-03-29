import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import serialize from 'serialize-javascript';
import reducers from './reducers';

const middleware = [thunk];

function canUseDom() {
  return typeof window !== 'undefined';
}

const configureStore = (req = { request: { cookies: {} } }) => {
  const isClient = canUseDom();

  const preloadedState = {
    auth: {},
    jobs: {},
    request: {
      cookies: req.request.cookies,
    },
  };

  return createStore(
    reducers,
    isClient ? window.STATE : preloadedState,
    compose(
      // thunk middleware to support async actions.
      applyMiddleware(...middleware),
      // If you are using the devToolsExtension
      isClient && window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f
    )
  );
};

export default configureStore;
