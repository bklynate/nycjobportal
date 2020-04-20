import React from 'react';
import { connect } from 'react-redux';
import { Box } from '@chakra-ui/core';
import JobResultItem from '../JobResultItem';
import styles from './styles.scss';

const renderResultsList = props => {
  const { data: jobs = [] } = props;
  return jobs.map((job, index) => <JobResultItem key={index} data={job} />);
};

const SearchResultsList = props => (
  <Box className={styles.jobResultsListContainer} my="2rem">
    {renderResultsList(props)}
  </Box>
);

const mapStateToProps = state => {
  const { jobs } = state || {};
  return jobs;
};

export default connect(mapStateToProps)(SearchResultsList);
