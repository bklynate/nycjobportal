import { getJobs } from '../../server/routes/getJobs';
import mockGetJobs from '../mocks/getJobs';
import {
  getJobsResponse,
  getJobsBySearchResponse,
} from '../fixtures/getJobsFixture';

describe('getJobs', () => {
  beforeEach(() => {
    mockGetJobs();
  });

  it('successfully retrieves jobs', async () => {
    const result = await getJobs();
    expect(result.data).toMatchObject(getJobsResponse);
  });

  it('successfully retrieves jobs by search text', async () => {
    const result = await getJobs(global.searchText);
    expect(result.data).toMatchObject(getJobsBySearchResponse);
  });
});
