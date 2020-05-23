import React from 'react';
import queryString from 'query-string';
import loadable from '@loadable/component';
import Form from '../Form';

const SearchResultsList = loadable(() => import('../SearchResultsList'));

const LandingPage = props => {
  const { location } = props;
  const values = queryString.parse(location.search);
  const searchQuery = values.q || '';
  return (
    <div>
      <Form searchQuery={searchQuery} />
      <SearchResultsList />
    </div>
  );
};

export default LandingPage;
