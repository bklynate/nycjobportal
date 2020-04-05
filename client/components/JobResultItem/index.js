import React from 'react';
import { Box, Badge, Text } from '@chakra-ui/core';
import styles from './styles.scss';

const formatFullTimePartTimeIndicator = fullTimePartTimeIndicator => {
  if (fullTimePartTimeIndicator === 'F') return 'Full Time';
  if (fullTimePartTimeIndicator === 'P') return 'Part Time';
  return null;
};

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
      className={styles.cardContainer}
      rounded="20px"
      boxShadow="sm"
      border="0.1rem solid"
      borderColor="gray.500"
      mb="3.25rem"
    >
      <Box p={5}>
        <Badge p={2} variant="outline" mr="1rem">
          {postingType}
        </Badge>
        {fullTimePartTimeIndicator && (
          <Badge p={2} variant="outline">
            {formatFullTimePartTimeIndicator(fullTimePartTimeIndicator)}
          </Badge>
        )}
        <Text className={styles.agencyHeader}>
          <span className={styles.jobAttribute}>{agency}</span>
        </Text>
        <Text>
          Business Title:{' '}
          <span className={styles.jobAttribute}>{businessTitle}</span>
        </Text>
        <Text className={styles.civilServiceTitle}>
          Civil Service Title:{' '}
          <span className={styles.jobAttribute}>
            {civilServiceTitle.toLowerCase()}
          </span>
        </Text>
        <Text>
          Work Unit:{' '}
          <span className={styles.jobAttribute}>{divisionWorkUnit}</span>
        </Text>
        <Text>
          Job Category:{' '}
          <span className={styles.jobAttribute}>{jobCategory}</span>
        </Text>
        <Text>
          Location: <span className={styles.jobAttribute}>{workLocation}</span>
        </Text>
      </Box>
    </Box>
  );
};

export default JobResultItem;
