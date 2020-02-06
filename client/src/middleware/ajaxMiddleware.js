import axios from 'axios';

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
  switch (true) {
    case typeof step === 'string':
      return next({ type: step, payload });
    case typeof step === 'object':
      return next({ payload, ...step });
    case typeof step === 'function':
      return next(step(payload));
    default:
      return;
  }
};

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
    const response = await axios[method](url, params);
    processStep(next, onSuccess, response);
  } catch (error) {
    processStep(next, onFailure, error);
  }
};
