import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import ReactRouter from 'react-router-dom';
import createTemplate from 'lodash.template';

import compression from 'compression';
import fs from 'fs';
import path from 'path';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import passport from 'passport';
import mongoose from 'mongoose';

import store from '../src/store';
import App from '../src/components/App';

import authRoutes from './routes/authRoutes';
import jobRoutes from './routes/jobsApi';

import { cookieKey } from './config/keys';

const app = express();
const { StaticRouter } = ReactRouter;
const { PORT = 5000 } = process.env;
const clientIndexHTMLPath = path.join(__dirname, '..', 'dist', 'index.html');
const baseTemplate = fs.readFileSync(clientIndexHTMLPath);
const template = createTemplate(baseTemplate);
const mongoUrl = process.env.MONGODB_URI || 'mongodb://localhost/bp_db';

require('./models/User');
require('./services/passport');

app.use(compression());
app.use('/dist', express.static('../dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());
mongoose.Promise = global.Promise;
mongoose.connect(mongoUrl);
authRoutes(app);
jobRoutes(app);

app.use((req, res) => {
  const context = {};
  const body = ReactDOMServer.renderToString(
    React.createElement(
      Provider,
      { store },
      React.createElement(
        StaticRouter,
        { location: req.url, context },
        React.createElement(App)
      )
    )
  );

  // We pass context in above to handle the potential case of
  // a redirect.
  if (context.url) {
    res.redirect(context.url);
  }

  res.write(template({ body }));
  res.end();
});

if (process.env.NODE_ENV === 'production') {
  // Express serves up production build assets
  app.use(express.static('dist'));

  // This below informs Express to serve up
  // the index.html file if it doesn't recognize
  // the provided routes
  const path = require('path'); // eslint-disable-line
  app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
  });
}

app.listen(PORT, () => console.log(`They came from PORT[${PORT}]`)); // eslint-disable-line
