import { getJobs } from './../getJobs.js';

describe('getJobs()', () => {
  it('should return data of type object', () => {
    getJobs('test').then(data => {
      expect(typeof data).toBe('object');
    })
  });
});