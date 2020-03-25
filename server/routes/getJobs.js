/* eslint-disable import/prefer-default-export */
import axios from 'axios';

/**
 * @description Function that makes calls to jobs API
 * If param is not provided then all jobs will be returned.
 * @param {String} userQuery user query/keyword search for jobs API
 * @returns {Object} returns response object
 * @todo Refactor to make function more functional (IE: pass url into function)
 */
export const getJobs = async userQuery => {
  const urlConstants = {
    base: 'https://data.cityofnewyork.us',
    resource: '/resource/kpav-sd4t.json',
    apiKey: `/?$$app_token=${process.env.APIKEY}`,
  };

  const constructApiUrl = `${urlConstants.base}${urlConstants.resource}${urlConstants.apiKey}`;
  const encodeKeywordParam = encodeURI(
    `$query=select * search '${userQuery}' limit 100&$$query_timeout_seconds=60`
  );
  const apiUrl = userQuery
    ? `${constructApiUrl}&&${encodeKeywordParam}`
    : constructApiUrl;

  try {
    return await axios(apiUrl);
  } catch (error) {
    return error;
  }
};
