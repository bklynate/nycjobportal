/* eslint-disable consistent-return */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {s
  isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  renderContent() {
    const { auth } = this.props;
    switch (!this.isEmpty(auth)) {
      case null:
        return;
      case false:
        return <a href='/auth/google'>Log in with Google</a>;
      default:
        return <a href='/api/logout'>Logout</a>;
    }
  }

  render() {
    return (
      <nav>
        <div className='header nav-wrapper'>
          <Link to={this.props.auth ? '/' : '/'} className='left brand-logo'>
            Boilerplate
          </Link>
          <ul className='right header-right'>
            <li className='header-right-content'>{this.renderContent()}</li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Header);
