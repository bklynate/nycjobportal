import React from 'react';
import queryString from 'query-string';
import Form from './Form';
import JobResultsList from './JobResultsList';

const LandingPage = props => {
  const { location } = props;
  const values = queryString.parse(location.search);
  const searchQuery = values.q || '';
  return (
    <div>
      <h1>Landing Page</h1>
      <Form searchQuery={searchQuery} />
      <JobResultsList />
    </div>
  );
};

export default LandingPage;
