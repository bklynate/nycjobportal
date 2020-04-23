/* eslint-disable consistent-return */
import React, { Component } from 'react';
import { Flex, Text, Badge } from '@chakra-ui/core';
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
    // ----------------------------------------------------------------
    // TODO: Leaving this code here; Will use to wire up authentication
    // ----------------------------------------------------------------
    // const { request } = this.props;
    // const { cookies } = request;
    // const { asx_data: userToken } = cookies;

    return (
      <Flex
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        mt={4}
      >
        <Flex
          display="flex"
          flexDirection="row"
          alignItems="flex-start"
          justifyContent="flex-start"
        >
          <Text fontSize="2rem" fontWeight="bold" mb={0}>
            NYC JOB SEARCHER
          </Text>
          <Badge variant="subtle" variantColor="red" ml={1} mt="1.8rem">
            BETA
          </Badge>
        </Flex>
        <Text color="gray.500">Easily Find City Job Listings</Text>
      </Flex>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export { Header };

export default connect(mapStateToProps)(Header);
