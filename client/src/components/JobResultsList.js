import React from 'react';
import { connect } from 'react-redux';
import { Flex } from '@chakra-ui/core';
import JobResultItem from './JobResultItem';

const renderJobItems = job => (
  <JobResultItem key={`${job.job_id}-${job.posting_type}`} data={job} />
);

const JobsResultsList = props => {
  return (
    <Flex flexDirection="row" wrap="wrap" justify="space-between" my={6}>
      {props.searchJobKeywords.map(renderJobItems)}
    </Flex>
  );
};

const mapStateToProps = state => {
  const { searchJobKeywords } = state.jobs;
  return { searchJobKeywords };
};

export default connect(mapStateToProps)(JobsResultsList);
