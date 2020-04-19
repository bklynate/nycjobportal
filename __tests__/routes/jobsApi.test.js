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
  describe('/api/alljobs', () => {
    it('repond with a 200', async () => {
      const result = await axios.get(`${global.internalBaseUrl}/api/alljobs`);
      expect(result.status).toEqual(200);
      expect(result.data).toMatchObject(getJobsResponse);
    });
  });

  describe('/api/getjobbykeyword', () => {
    it('repond with a 200', async () => {
      const result = await axios.post(
        `${global.internalBaseUrl}/api/getjobbykeyword`,
        { keyword: global.searchTerm }
      );
      expect(result.status).toEqual(200);
      expect(result.data).toMatchObject(getJobsBySearchResponse);
    });
  });
});
