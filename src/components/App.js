import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@chakra-ui/core';
import * as actions from '../actions';

import Header from './Header';
import LandingPage from './LandingPage';
import NotFoundPage from './NotFoundPage';

class App extends Component {
  componentDidMount() {
    const { fetchUser } = this.props;
    fetchUser();
  }

  render() {
    return (
      <ThemeProvider>
        <div>
          <>
            <Header />
            <div>
              <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="*" component={NotFoundPage} />
              </Switch>
            </div>
          </>
        </div>
      </ThemeProvider>
    );
  }
}

const loadData = store => {
  return store.dispatch(actions.fetchUser());
};

export { loadData };

export default connect(null, actions)(App);
