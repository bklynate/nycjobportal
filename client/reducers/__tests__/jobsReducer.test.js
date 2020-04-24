import jobsReducer from '../jobsReducer';
import mockJobResponse from '../__mocks__/mockJobResponse';

describe('jobsReducers', () => {
  it("should return a new state when provided 'FETCH_KEYWORD_JOB' action.type and payload", () => {
    const initialState = {};
    const state = jobsReducer(initialState, {
      type: 'fetch_keyword_jobs',
      payload: {
        data: [{ ...mockJobResponse }],
      },
    });

    expect(state).toEqual({
      data: [{ ...mockJobResponse }],
    });
  });

  it('should return the default state of an empty object if there is not an action.type match', () => {
    const initialState = {};
    const state = jobsReducer(initialState, {
      type: 'fetch_keyword_job',
      payload: {
        data: [{ ...mockJobResponse }],
      },
    });

    expect(state).toEqual(initialState);
  });
});
