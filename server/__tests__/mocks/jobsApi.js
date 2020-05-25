import nock from 'nock';
import {
  getJobsResponse,
  getJobsBySearchResponse,
} from '../fixtures/getJobsFixture';

const mockJobsApi = () =>
  nock(global.internalBaseUrl, { encodedQueryParams: true })
    .get('/api/alljobs')
    .reply(200, getJobsResponse)
    .post('/api/get-job-by-keyword')
    .reply(200, getJobsBySearchResponse);

export default mockJobsApi;
