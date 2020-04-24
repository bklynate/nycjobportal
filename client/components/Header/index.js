/* eslint-disable consistent-return */
import React from 'react';
import { Flex, Text, Badge } from '@chakra-ui/core';

const Header = () => (
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

export default Header;
