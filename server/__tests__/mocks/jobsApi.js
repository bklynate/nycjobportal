import nock from 'nock';
import {
  getJobsResponse,
  getJobsBySearchResponse,
} from '../fixtures/getJobsFixture';

const mockJobsApi = () =>
  nock(global.internalBaseUrl, { encodedQueryParams: true })
    .get('/api/get-all-jobs')
    .reply(200, getJobsResponse)
    .post('/api/get-jobs-by-keyword')
    .reply(200, getJobsBySearchResponse);

export default mockJobsApi;
