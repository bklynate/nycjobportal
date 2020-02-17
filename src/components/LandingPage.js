import React from 'react';
import Form from './Form';
import JobResultsList from './JobResultsList';

const LandingPage = () => (
  <div>
    {/* eslint-disable-next-line */}
    <button onClick={() => console.log('Oh shit, you pressed me!!!!')}>
      Press Me!
    </button>
    <h1>Landing Page</h1>
    <Form />
    <JobResultsList />
  </div>
);

export default LandingPage;
