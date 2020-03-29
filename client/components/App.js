import React from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from '@chakra-ui/core';
import { renderRoutes } from 'react-router-config';
import * as actions from '../actions';

import Header from './Header';

const App = props => {
  const { route } = props;
  const { routes } = route;
  return (
    <ThemeProvider>
      <>
        <Header />
        {renderRoutes(routes)}
      </>
    </ThemeProvider>
  );
};

export default connect(null, actions)(App);
