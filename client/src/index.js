import 'normalize.css/normalize.css';
import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import './public/styles/styles.css';
import { ajaxMiddleware } from './middleware';
import thunk from 'redux-thunk';

import reducers from './reducers';
import App from './components/App';

const middleware = [thunk, ajaxMiddleware];
export const store = createStore(reducers, {}, applyMiddleware(...middleware));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('#root')
);
