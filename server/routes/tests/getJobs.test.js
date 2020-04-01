import { getJobs } from './../getJobs.js';

const testConstants = {
  baseUrl: 'https://data.cityofnewyork.us/resource/kpav-sd4t.json'
}

describe('getJobs()', () => {
  it('should return data of type object', async () => {
    const data = await getJobs('test');
    expect(typeof data).toBe('object');
  });

  it('should send request to correct url', async () => {
    const data = await getJobs('test');
    expect(data.config.url).toContain(testConstants.baseUrl);
  });
});