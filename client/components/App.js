import React from 'react';
import { connect } from 'react-redux';
import { ThemeProvider, Flex, Box } from '@chakra-ui/core';
import { renderRoutes } from 'react-router-config';
import * as actions from '../actions';

import Header from './Header';

const App = props => {
  const { route } = props;
  const { routes } = route;
  return (
    <Box maxW="1440px" mx="auto">
      <ThemeProvider>
        <Header />
        <Flex display="flex" flexDirection="column" mt={4}>
          {renderRoutes(routes)}
        </Flex>
      </ThemeProvider>
    </Box>
  );
};

export default connect(null, actions)(App);
