import React from 'react'; // eslint-disable-line

import App from './App';
import LandingPage from './LandingPage';
import JobListingPage from './JobListingPage';
import Form, { loadData as formLoadData } from './Form';
import NotFoundPage from './NotFoundPage';

export default [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: LandingPage,
        routes: [
          {
            component: Form,
            loadData: formLoadData,
          },
        ],
      },
      {
        path: '/job-listing/:id',
        exact: true,
        component: JobListingPage,
      },
      {
        path: '*',
        exact: true,
        component: NotFoundPage,
      },
    ],
  },
];
