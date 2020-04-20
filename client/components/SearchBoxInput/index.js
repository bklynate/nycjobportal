import React from 'react';
import { Input, Flex } from '@chakra-ui/core';

const SearchBoxInput = props => {
  const { value, placeholder, onChange } = props;
  return (
    <Flex justifyContent="center" mb="1.3rem">
      <Input
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        variant="outline"
        size="lg"
        fontSize="1.5rem"
        fontWeight="100"
      />
    </Flex>
  );
};

export default SearchBoxInput;
