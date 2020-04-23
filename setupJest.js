import React from 'react';
import { render as testRender } from '@testing-library/react';
import { ThemeProvider, theme } from '@chakra-ui/core';

const customTheme = {
  ...theme,
  fonts: {
    body: `Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  },
};

require('dotenv').config();

const render = Component => {
  return testRender(
    <ThemeProvider theme={customTheme}>{Component}</ThemeProvider>
  );
};

global.internalBaseUrl = 'http://localhost:5000';
global.jobsBaseUrl = 'https://data.cityofnewyork.us';
global.searchText = 'Intern';
global.render = render;
