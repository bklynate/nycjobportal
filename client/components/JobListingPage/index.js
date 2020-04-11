import React from 'react';

const sanitizeJobDescriptionText = (jobDescriptionText) => {
  return jobDescriptionText.replace(/[^a-zA-Z0-9 ]/g, '');
};

const JobListingPage = (props) => {
  const { location } = props;
  const { state } = location;
  const { jobListing } = state || {};
  const {
    agency = null,
    businessTitle = null,
    jobCategory = null,
    jobDescription = '',
  } = jobListing || {};

  const sanitizedJobDescriptionText = sanitizeJobDescriptionText(
    jobDescription
  );

  return (
    <div>
      <h1>{businessTitle}</h1>
      <h2>
        {agency} / {jobCategory}
      </h2>
      <p>{sanitizedJobDescriptionText}</p>
    </div>
  );
};

export default JobListingPage;
