import React from 'react';
import { connect } from 'react-redux';
import { Box } from '@chakra-ui/core';
import JobResultItem from './JobResultItem';

const renderResultsList = props => {
  const { data: jobs = [] } = props;
  return jobs.map((job, index) => <JobResultItem key={index} data={job} />);
};

const JobsResultsList = props => (
  <Box my="2rem">{renderResultsList(props)}</Box>
);

const mapStateToProps = state => {
  const { jobs } = state || {};
  return jobs;
};

export default connect(mapStateToProps)(JobsResultsList);
