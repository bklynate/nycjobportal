import nock from 'nock';
import {
  getJobsResponse,
  getJobsBySearchResponse,
} from '../fixtures/getJobsFixture';

const mockGetJobs = () => {
  const resource = `/resource/kpav-sd4t.json/?$$app_token=${process.env.APIKEY}`;
  const query = `$query=select * search '${global.searchText}' limit 100&$$query_timeout_seconds=60`;

  return nock(global.jobsBaseUrl, { encodedQueryParams: true })
    .get(resource)
    .reply(200, getJobsResponse)
    .get(`${resource}&&${query}`)
    .reply(200, getJobsBySearchResponse);
};

export default mockGetJobs;
