import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@chakra-ui/core';
import * as actions from '../actions';

import Header from './Header';
import LandingPage from './LandingPage';

const NotFound404 = () => <h2>PAGE NOT FOUND</h2>;

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
                <Route exact path="*" component={NotFound404} />
              </Switch>
            </div>
          </>
        </div>
      </ThemeProvider>
    );
  }
}

export default connect(null, actions)(App);
