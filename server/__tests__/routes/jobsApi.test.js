import axios from 'axios';
import mockJobsApi from '../mocks/jobsApi';
import {
  getJobsResponse,
  getJobsBySearchResponse,
} from '../fixtures/getJobsFixture';

describe('jobsApi', () => {
  beforeEach(() => {
    mockJobsApi();
  });
  describe('/api/get-all-jobs', () => {
    it('repond with a 200', async () => {
      const result = await axios.get(
        `${global.internalBaseUrl}/api/get-all-jobs`
      );
      expect(result.status).toEqual(200);
      expect(result.data).toMatchObject(getJobsResponse);
    });
  });

  describe('/api/get-jobs-by-keyword', () => {
    it('repond with a 200', async () => {
      const result = await axios.post(
        `${global.internalBaseUrl}/api/get-jobs-by-keyword`,
        { keyword: global.searchTerm }
      );
      expect(result.status).toEqual(200);
      expect(result.data).toMatchObject(getJobsBySearchResponse);
    });
  });
});
