import 'normalize.css/normalize.css';
import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import './styles/styles.css';

import reducers from './reducers';
import App from './components/App';
import { ajaxMiddleware } from './middleware';

const middleware = [
  thunk,
  ajaxMiddleware
];
const store = createStore(reducers, {}, applyMiddleware(...middleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root'),
);
