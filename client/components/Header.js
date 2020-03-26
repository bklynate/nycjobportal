/* eslint-disable consistent-return */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { isEmptyObject } from '../../util/isEmptyObject';

class Header extends Component {
  getIfUserIsAuthenticated(user = {}) {
    if (user === null) return false;
    if (user === undefined) return false;
    return !isEmptyObject(user);
  }

  renderSignInContent(user) {
    const isUserAuthenticated = this.getIfUserIsAuthenticated(user);
    if (isUserAuthenticated) return <a href="/api/logout">Logout</a>;
    return <a href="/auth/google">Log in with Google</a>;
  }

  render() {
    const { auth } = this.props;
    const { user } = auth;
    return (
      <nav>
        <div>
          <Link to="/">NYC Job Portal</Link>
          <ul>
            <li>{this.renderSignInContent(user)}</li>
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
