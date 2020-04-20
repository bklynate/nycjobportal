import React from 'react';
import { Button } from '@chakra-ui/core';
import styles from './styles.scss';

const sanitizeJobDescriptionText = jobDescriptionText => {
  return jobDescriptionText.replace(/[^a-zA-Z0-9 ]/g, '');
};

const applyToJobBaseURL =
  'https://a127-jobs.nyc.gov/psc/nycjobs/EMPLOYEE/HRMS/c/HRS_HRAM.HRS_APP_SCHJOB.GBL?Page=HRS_APP_JBPST&Action=U&FOCUS=Applicant&SiteId=1&PostingSeq=1&';

const JobListingPage = props => {
  const { location } = props;
  const { state } = location;
  const { jobListing } = state || {};
  const {
    agency = '',
    jobID = '',
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
      <a
        href={`${applyToJobBaseURL}JobOpeningId=${jobID}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button>Apply Now</Button>
      </a>
    </div>
  );
};

export default JobListingPage;
