import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as actions from './../actions';

import Header from './Header';
import LandingPage from './LandingPage';

const NotFound404 = () => <h2>PAGE NOT FOUND</h2>;

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <BrowserRouter>
          <div>
            <Header />
            <div className="container">
              <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="*" component={NotFound404} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
