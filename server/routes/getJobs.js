/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const resolveApiUrl = (baseApiUrl, { keyword, jobID, jobPostingType }) => {
  if (jobID && jobPostingType) {
    return `${baseApiUrl}&job_id=${jobID}&posting_type=${jobPostingType}`;
  }

  if (keyword) {
    const encodedKeywordParam = encodeURI(
      `$query=select * search '${keyword}' limit 100&$$query_timeout_seconds=60`
    );

    return `${baseApiUrl}&${encodedKeywordParam}`;
  }

  return baseApiUrl;
};

/**
 * @description Function that makes calls to jobs API
 * If param is not provided then all jobs will be returned.
 * @param {Object} {keyword | jobID | postingType}
 * @returns {Object} returns response object
 * @todo Refactor to make function more functional (IE: pass url into function)
 */
export const getJobs = async ({
  keyword = '',
  jobID = '',
  jobPostingType = '',
}) => {
  const urlConstants = {
    base: 'https://data.cityofnewyork.us',
    resource: '/resource/kpav-sd4t.json',
    apiKey: `/?$$app_token=${process.env.APIKEY}`,
  };

  const baseApiUrl = `${urlConstants.base}${urlConstants.resource}${urlConstants.apiKey}`;
  const resolvedApiUrl = resolveApiUrl(baseApiUrl, {
    keyword,
    jobID,
    jobPostingType,
  });

  try {
    return await axios(resolvedApiUrl);
  } catch (error) {
    return error;
  }
};
