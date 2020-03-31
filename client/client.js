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

function render(routes) {
  ReactDOM.hydrate(
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
}

render(Routes);

if (module.hot) {
  module.hot.accept('./components/Routes.js', () => {
    const newRoutes = require('./components/Routes.js').default;
    render(newRoutes);
  });
}
