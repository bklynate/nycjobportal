/* eslint-disable consistent-return */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
  determineIfUserIsAuthenticated(user) {
    if (user === null) return false;
    if (user === undefined) return false;
    return !(Object.keys(user).length === 0);
  }

  renderSignInContent() {
    const { auth } = this.props;
    const { user } = auth;
    const isUserAuthenticated = this.determineIfUserIsAuthenticated(user);

    if (isUserAuthenticated) return <a href="/api/logout">Logout</a>;
    return <a href="/auth/google">Log in with Google</a>;
  }

  render() {
    return (
      <nav>
        <div className="header nav-wrapper">
          <Link to={this.props.auth ? '/' : '/'} className="left brand-logo">
            NYC Job Portal
          </Link>
          <ul className="right header-right">
            <li className="header-right-content">
              {this.renderSignInContent()}
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Header);
