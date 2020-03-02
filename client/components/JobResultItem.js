import React from 'react';
import { Box, Badge, Text } from '@chakra-ui/core';

const JobResultItem = props => {
  const { data } = props;

  const {
    agency,
    posting_type: postingType,
    business_title: businessTitle,
    civil_service_title: civilServiceTitle,
    division_work_unit: divisionWorkUnit,
    full_time_part_time_indicator: fullTimePartTimeIndicator,
    job_category: jobCategory,
    work_location: workLocation,
  } = data;

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
          {postingType}
        </Badge>
        <Text>{agency}</Text>
        <Text>{businessTitle}</Text>
        <Text>{civilServiceTitle}</Text>
        <Text>{divisionWorkUnit}</Text>
        <Text>{fullTimePartTimeIndicator}</Text>
        <Text>{jobCategory}</Text>
        <Text>{workLocation}</Text>
      </Box>
    </Box>
  );
};

export default JobResultItem;
