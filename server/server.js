/* eslint-disable */

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes, matchRoutes } from 'react-router-config';

import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import mongoose from 'mongoose';

import compression from 'compression';
import serialize from 'serialize-javascript';

import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpack from 'webpack';
import config from '../config/webpack.dev';

import configureStore from '../client/configureStore';
import Routes from '../client/components/Routes';
import authRoutes from './routes/authRoutes';
import jobRoutes from './routes/jobsApi';

import loadable from '../dist/loadable.json';
import { loadData } from '../client/components/Form';

const app = express();
const compiler = webpack(config);
const isProduction = process.env.NODE_ENV === 'production';

const { PORT = 5000 } = process.env;
const mongoUrl = process.env.MONGODB_URI || 'mongodb://localhost/bp_db';
const cookieKey = process.env.COOKIE_KEY;

/* ORDER MATTERS ! */
require('./models/User');
require('./services/passport');

app.use(compression());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  cookieSession({
    name: 'auth-0',
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [cookieKey],
    sameSite: true,
    secure: isProduction,
  })
);
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

if (!isProduction) {
  app.use(webpackDevMiddleware(compiler, config.devServer));
  app.use(webpackHotMiddleware(compiler));
  console.log('\n');
  console.log('....Webpack Dev & Hot Middleware Enabled....');
  console.log('\n');
}

app.use(express.static('dist'));

mongoose.Promise = global.Promise;
mongoose.connect(mongoUrl);

authRoutes(app);
jobRoutes(app);

app.get('/', (request, response) => {
  const store = configureStore({ request });
  const context = {};

  if (context.url) {
    response.redirect(301, context.url);
  }

  // This code is taken from https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
  const preloadedDataByRoute = matchRoutes(Routes, request.path)
    .filter(({ route }) => route.loadData)
    .map(async ({ route }) => {
      const loadedData = await loadData(store, request);
      return loadedData;
    });

  /* eslint-disable-next-line */
  Promise.all(preloadedDataByRoute).then(() => {
    const html = ReactDOMServer.renderToString(
      <Provider store={store}>
        <StaticRouter location={request.path} context={context}>
          {renderRoutes(Routes)}
        </StaticRouter>
      </Provider>
    );

    const { assets } = loadable;
    const cssAssets = assets
      .filter((asset) => asset.name.endsWith('.css'))
      .map(
        (asset) =>
          `<link href="${asset.name}" rel="stylesheet" type="text/css">`
      );

    const javascriptAssets = assets
      .filter((asset) => asset.name.endsWith('.js'))
      .map((asset) => `<script src="${asset.name}"></script>`);

    if (isProduction) {
      return response.send(`
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <link rel="shortcut icon" href="#" />
            <script data-ad-client="ca-pub-7103668196140065" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
            <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
            ${cssAssets.map((file) => file).join('\n')}
            <title>NYC Job Portal - Helping Folks Find NYC City Jobs</title>
          </head>
          <body>
            <noscript>
              You need to enable JavaScript to run this app.
            </noscript>
            <div id="root">${html}</div>
            <script>
              window.STATE = ${serialize(store.getState())}
            </script>
            ${javascriptAssets.map((file) => file).join('\n')}
          </body>
        </html>
      `);
    }

    return response.send(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <link rel="shortcut icon" href="#" />
          <script data-ad-client="ca-pub-7103668196140065" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
          <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
          ${cssAssets.map((file) => file).join('\n')}
          <title>NYC Job Portal - Helping Folks Find NYC City Jobs</title>
        </head>
        <body>
          <noscript>
            You need to enable JavaScript to run this app.
          </noscript>
          <div id="root">${html}</div>
          <script>
            window.STATE = ${serialize(store.getState())}
          </script>
          ${javascriptAssets.map((file) => file).join('\n')}
        </body>
      </html>
    `);
  });
});

app.listen(PORT, () => console.log(`They came from http://localhost:${PORT}`)); // eslint-disable-line
