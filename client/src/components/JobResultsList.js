import React from 'react';
import JobResultItem from './JobResultItem';
import { connect } from 'react-redux';

const renderResultsList = props => {
  const { data: jobs = [] } = props.jobs || {};

  return jobs.map((job, index) => <JobResultItem key={index} data={job} />);
};

const JobsResultsList = props => {
  return (
    <div>
      <h1>Hi</h1>
      {renderResultsList(props)}
    </div>
  );
};

const mapStateToProps = state => {
  const { jobs } = state || {};
  return { jobs };
};

export default connect(mapStateToProps)(JobsResultsList);
