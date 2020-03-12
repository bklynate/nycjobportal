import React from 'react';
import { connect } from 'react-redux';
import { Flex } from '@chakra-ui/core';
import JobResultItem from './JobResultItem';

const renderResultsList = props => {
  const { data: jobs = [] } = props;
  return jobs.map((job, index) => <JobResultItem key={index} data={job} />);
};

const JobsResultsList = props => {
  return (
    <Flex flexDirection="row" wrap="wrap" justify="space-between" my={6}>
      {renderResultsList(props)}
    </Flex>
  );
};

const mapStateToProps = state => {
  const { jobs } = state || {};
  return jobs;
};

export default connect(mapStateToProps)(JobsResultsList);
