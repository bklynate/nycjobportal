import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render as testRender } from '@testing-library/react';
import { ThemeProvider, theme } from '@chakra-ui/core';
import configureStore from './client/configureStore';

const customTheme = {
  ...theme,
  fonts: {
    body: `Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  },
};

require('dotenv').config();

const render = Component => {
  return testRender(
    <BrowserRouter>
      <ThemeProvider theme={customTheme}>{Component}</ThemeProvider>
    </BrowserRouter>
  );
};

const reduxConnectedRender = Component => {
  const store = configureStore();
  return testRender(
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={customTheme}>{Component}</ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};

global.internalBaseUrl = 'http://localhost:5000';
global.jobsBaseUrl = 'https://data.cityofnewyork.us';
global.searchText = 'Intern';
global.render = render;
global.reduxConnectedRender = reduxConnectedRender;
