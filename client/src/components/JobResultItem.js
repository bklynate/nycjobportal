import React from 'react';
import { Box } from '@chakra-ui/core';

const JobResultItem = props => {
  const {
    agency,
    business_title,
    civil_service_title,
    division_work_unit,
    full_time_part_time_indicator,
    job_category,
    work_location,
  } = props.data;
  return (
    <div style={{ border: '1px solid red', marginBottom: '10px' }}>
      <Box>
        <p>{agency}</p>
        <p>{business_title}</p>
        <p>{civil_service_title}</p>
        <p>{division_work_unit}</p>
        <p>{full_time_part_time_indicator}</p>
        <p>{job_category}</p>
        <p>{work_location}</p>
      </Box>
    </div>
  );
};

export default JobResultItem;
