import axios from 'axios';

const { baseURL } = process.env;

const axiosWithBaseURL = axios.create({
  baseURL,
});

/**
 * Dispatched action require the following shape:
 * {
 *  url: string
 *  method: 'get'|'post'
 *  params: any
 *  onStart: string|object|function
 *  onSuccess: string|object|function
 *  onFailure: string|object|function
 * }
 */

const requiredProperties = [
  'url',
  'method',
  'onStart',
  'onSuccess',
  'onFailure',
];

const processStep = (next, step, payload = null) => {
  if (typeof step === 'string') return next({ type: step, payload });
  if (typeof step === 'object') return next({ payload, ...step });
  if (typeof step === 'function') return next(step(payload));
  /* eslint-disable-next-line */
  return;
};

/* eslint-disable-next-line */
export const ajaxMiddleware = () => next => async action => {
  if (
    !(
      typeof action === 'object' &&
      requiredProperties.every(property => property in action)
    )
  ) {
    return next(action);
  }

  const { url, method, params, onStart, onSuccess, onFailure } = action;
  processStep(next, onStart);

  try {
    const response = await axiosWithBaseURL[method](url, params);
    processStep(next, onSuccess, response);
  } catch (error) {
    processStep(next, onFailure, error);
  }
};
