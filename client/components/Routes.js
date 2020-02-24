import React from 'react'; // eslint-disable-line

import App, { loadData } from './App';
import LandingPage from './LandingPage';
import NotFoundPage from './NotFoundPage';

export default [
  {
    component: App,
    loadData,
    routes: [
      {
        path: '/',
        exact: true,
        component: LandingPage,
      },
      {
        path: '*',
        exact: true,
        component: NotFoundPage,
      },
    ],
  },
];
