import React from 'react';
import { Box, Badge, Text } from '@chakra-ui/core';

const JobResultItem = props => {
  const {
    agency,
    business_title,
    civil_service_title,
    division_work_unit,
    full_time_part_time_indicator,
    job_category,
    work_location,
    posting_type,
  } = props.data;

  return (
    <Box
      w="400px"
      rounded="20px"
      boxShadow="sm"
      border="1px"
      borderColor="gray.500"
      mb={5}
    >
      <Box p={5}>
        <Badge p={2} variant="outline">
          {posting_type}
        </Badge>
        <Text>{agency}</Text>
        <Text>{business_title}</Text>
        <Text>{civil_service_title}</Text>
        <Text>{division_work_unit}</Text>
        <Text>{full_time_part_time_indicator}</Text>
        <Text>{job_category}</Text>
        <Text>{work_location}</Text>
      </Box>
    </Box>
  );
};

export default JobResultItem;
