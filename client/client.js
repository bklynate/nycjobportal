/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import './main.css';
import configureStore from './configureStore';
import { renderRoutes } from 'react-router-config';
import Routes from './components/Routes';

const store = configureStore();

function render() {
  ReactDOM.hydrate(
    <Provider store={store}>
      <BrowserRouter>{renderRoutes(Routes)}</BrowserRouter>
    </Provider>,
    document.getElementById('root')
  );
}

render();

// if (module.hot) {
//   module.hot.accept('./components/App', () => {
//     render();
//   });
// }
