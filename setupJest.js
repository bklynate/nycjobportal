import React from 'react';
import { render as testRender } from '@testing-library/react';
import { ThemeProvider, theme } from '@chakra-ui/core';

require('dotenv').config();

const render = Component => {
  return testRender(<ThemeProvider theme={theme}>{Component}</ThemeProvider>);
};

global.internalBaseUrl = 'http://localhost:5000';
global.jobsBaseUrl = 'https://data.cityofnewyork.us';
global.searchText = 'Intern';
global.render = render;
