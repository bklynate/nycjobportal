import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import passport from 'passport';
import mongoose from 'mongoose';
// import serialize from 'serialize-javascript';

import compression from 'compression';

import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpack from 'webpack';
import config from '../config/webpack.dev';

import store from '../src/store';
import App from '../src/components/App';

import authRoutes from './routes/authRoutes';
import jobRoutes from './routes/jobsApi';

import keys from './config/keys';

const app = express();
const compiler = webpack(config);
const isProduction = process.env.NODE_ENV === 'production';

const { PORT = 5000 } = process.env;
const mongoUrl = process.env.MONGODB_URI || 'mongodb://localhost/bp_db';
const { cookieKey } = keys;

require('./models/User');
require('./services/passport');

app.use(compression());

/* ORDER MATTERS ! */

app.use(express.static('dist'));

if (!isProduction) {
  app.use(webpackDevMiddleware(compiler, config.devServer));
  app.use(webpackHotMiddleware(compiler));
  console.log('....Webpack Dev & Hot Middleware Enabled....');
}

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

app.get('*', (request, response) => {
  const context = {};

  if (context.url) {
    res.redirect(context.url);
  }

  console.log('HELLO ::', isProduction);

  if (isProduction) {
    console.log('HERE IS PROD');
    console.log('HERE IS PROD');
    console.log('HERE IS PROD');
    console.log('HERE IS PROD');
    console.log('HERE IS PROD');
    console.log('HERE IS PROD');
    console.log('HERE IS PROD');
  }

  if (isProduction) {
    response.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link href="main.css" rel="stylesheet">
      </head>
      <body>
        <noscript>
          You need to enable JavaScript to run this app.
        </noscript>
        <div id="root">
          ${ReactDOMServer.renderToString(
            <Provider store={store}>
              <StaticRouter location={request.url} context={context}>
                <App />
              </StaticRouter>
            </Provider>
          )}
        </div>
        <script src="bootstrap-bundle.js"></script>
        <script src="vendor-bundle.js"></script>
        <script src="vendors-main-bundle.js"></script>
        <script src="vendors-main-vendor-bundle.js"></script>
        <script src="main-bundle.js"></script>
      </body>
    </html>
  `);
  }

  response.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link href="main.css" rel="stylesheet">
      </head>
      <body>
        <noscript>
          You need to enable JavaScript to run this app.
        </noscript>
        <div id="root">
          ${ReactDOMServer.renderToString(
            <Provider store={store}>
              <StaticRouter location={request.url} context={context}>
                <App />
              </StaticRouter>
            </Provider>
          )}
        </div>
        <script src="main-bundle.js"></script>
      </body>
    </html>
  `);
});

app.listen(PORT, () => console.log(`They came from http://localhost:${PORT}`)); // eslint-disable-line
