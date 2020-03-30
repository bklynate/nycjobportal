import React from 'react';
import { Input, Flex } from '@chakra-ui/core';

const SearchBoxInput = (props) => {
  const { value, placeholder, onChange } = props;
  return (
    <Flex justifyContent="center">
      <Input
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        width="650px"
        variant="outline"
      />
    </Flex>
  );
};

export default SearchBoxInput;