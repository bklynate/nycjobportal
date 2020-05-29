import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { loadableReady } from '@loadable/component';
import configureStore from './configureStore';
import Routes from './components/Routes';

const store = configureStore();

function render(routes) {
  return loadableReady(() => {
    ReactDOM.hydrate(
      <Provider store={store}>
        <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
      </Provider>,
      document.getElementById('root')
    );
  });
}

render(Routes);
