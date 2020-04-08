import React from 'react';
import '../assets/stylesheets/global.scss';
import { connect } from 'react-redux';
import { ThemeProvider, Flex, Box, theme } from '@chakra-ui/core';
import { renderRoutes } from 'react-router-config';
import * as actions from '../actions';

import Header from './Header';

const customTheme = {
  ...theme,
  fonts: {
    body: `Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  },
};

const App = (props) => {
  const { route } = props;
  const { routes } = route;
  return (
    <Box>
      <ThemeProvider theme={customTheme}>
        <Header />
        <Flex display="flex" flexDirection="column" mt={4}>
          {renderRoutes(routes)}
        </Flex>
      </ThemeProvider>
    </Box>
  );
};

export default connect(null, actions)(App);
