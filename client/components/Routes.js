import React from 'react'; // eslint-disable-line

import loadable from '@loadable/component';

import App from './App';
import LandingPage from './LandingPage';

import Form, { loadData as formLoadData } from './Form';
import JobListingPage, {
  loadData as jobListingPageLoadData,
} from './JobListingPage';

const NotFoundPage = loadable(() => import('./NotFoundPage'));

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
        loadData: jobListingPageLoadData,
      },
      {
        path: '*',
        exact: true,
        component: NotFoundPage,
      },
    ],
  },
];
