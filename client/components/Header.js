/* eslint-disable consistent-return */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
  getIfUserIsAuthenticated(user = {}) {
    if (user === null) return false;
    if (user === undefined) return false;
    return typeof user === 'string';
  }

  renderSignInContent(user) {
    const isUserAuthenticated = this.getIfUserIsAuthenticated(user);
    if (isUserAuthenticated) return <a href="/api/logout">Logout</a>;
    return <a href="/auth/google">Log in with Google</a>;
  }

  render() {
    const { request } = this.props;
    const { cookies } = request;
    const { asx_data: userToken } = cookies;

    return (
      <nav>
        <div>
          <Link to="/">NYC Job Portal</Link>
          <ul>
            <li>{this.renderSignInContent(userToken)}</li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(Header);
