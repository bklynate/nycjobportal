import app from './../jobsApi.js';

describe('jobsApi.js', () => {
  test('it should be type object', () => {
    expect(typeof app).toBe('function')
  });
});
