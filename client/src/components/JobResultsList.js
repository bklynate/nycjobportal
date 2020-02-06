import React from 'react';
import JobResultItem from './JobResultItem';
import { connect } from 'react-redux';

const renderJob = (job, index) => <JobResultItem key={index} data={job} />;

const JobsResultsList = props => {
  return (
    <div>
      <h1>Hi</h1>
      {props.searchJobKeywords.map(renderJob)}
    </div>
  );
};

const mapStateToProps = state => {
  const { searchJobKeywords } = state.jobs;
  return { searchJobKeywords };
};

export default connect(mapStateToProps)(JobsResultsList);
