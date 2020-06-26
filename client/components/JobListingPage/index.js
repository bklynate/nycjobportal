import React from 'react';
import { Button } from '@chakra-ui/core';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import styles from './styles.scss';

const sanitizeJobDescriptionText = jobDescriptionText => {
  return jobDescriptionText.replace(/[^a-zA-Z0-9 ]/g, '');
};

const applyToJobBaseURL =
  'https://a127-jobs.nyc.gov/psc/nycjobs/EMPLOYEE/HRMS/c/HRS_HRAM.HRS_APP_SCHJOB.GBL?Page=HRS_APP_JBPST&Action=U&FOCUS=Applicant&SiteId=1&PostingSeq=1&';

const JobListingPage = props => {
  const { singleJob } = props;

  const {
    agency = '',
    job_id: jobID = '',
    business_title: businessTitle = '',
    job_category: jobCategory = '',
    job_description: jobDescription = '',
  } = singleJob || {};

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

const mapStateToProps = state => {
  const { singleJob } = state;
  return { singleJob };
};

const loadData = (store, request) => {
  const { query } = request || {};
  const { id, postingType } = query || {};
  return store.dispatch(actions.fetchSingleJob(id, postingType));
};

export { loadData };

export default connect(mapStateToProps, actions)(JobListingPage);
