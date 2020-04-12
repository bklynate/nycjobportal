import React from 'react';
import styles from './styles.scss';

const sanitizeJobDescriptionText = (jobDescriptionText) => {
  return jobDescriptionText.replace(/[^a-zA-Z0-9 ]/g, '');
};

const JobListingPage = (props) => {
  const { location } = props;
  const { state } = location;
  const { jobListing } = state || {};
  const {
    agency = '',
    businessTitle = '',
    jobCategory = '',
    jobDescription = '',
  } = jobListing || {};

  const lowercaseAgency = agency.toLowerCase();

  const sanitizedJobDescriptionText = sanitizeJobDescriptionText(
    jobDescription
  );

  return (
    <div className={styles.jobListingContainer}>
      <h1>{businessTitle}</h1>
      <h2>
        {lowercaseAgency} / {jobCategory}
      </h2>
      <p>{sanitizedJobDescriptionText}</p>
    </div>
  );
};

export default JobListingPage;
