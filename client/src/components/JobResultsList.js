import React from 'react';
import JobResultItem from './JobResultItem';
import { connect } from 'react-redux';

const _renderJob = (job, index) => <JobResultItem key={index} data={job} />;

const JobsResultsList = props => {
  return (
    <div>
      <h1>Hi</h1>
      {props.allJobs.map(_renderJob)}
    </div>
  );
};

const mapStateToProps = state => {
  const { allJobs } = state.jobs;
  return { allJobs };
};

export default connect(mapStateToProps)(JobsResultsList);
