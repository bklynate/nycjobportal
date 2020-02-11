import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { ThemeProvider } from '@chakra-ui/core';
import * as actions from '../actions';
// import { ajaxMiddleware } from './../middleware';
import thunk from 'redux-thunk';

import reducers from '../reducers';
import Header from './Header';
import LandingPage from './LandingPage';

// const middleware = [thunk, ajaxMiddleware];
// const store = createStore(reducers, {}, applyMiddleware(...middleware));

const NotFound404 = () => <h2>PAGE NOT FOUND</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <ThemeProvider>
        <div className="container-fluid">
          <>
            <Header />
            <div className="container">
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
