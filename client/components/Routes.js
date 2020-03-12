import React from 'react'; // eslint-disable-line

import App, { loadData } from './App';
import LandingPage from './LandingPage';
import Form, { loadData as formLoadData } from './Form';
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
        routes: [
          {
            component: Form,
            loadData: formLoadData,
          },
        ],
      },
      {
        path: '*',
        exact: true,
        component: NotFoundPage,
      },
    ],
  },
];
