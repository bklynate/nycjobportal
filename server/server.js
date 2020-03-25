import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes, matchRoutes } from 'react-router-config';

import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import passport from 'passport';
import mongoose from 'mongoose';

import compression from 'compression';
import serialize from 'serialize-javascript';

import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpack from 'webpack';
import config from '../config/webpack.dev';

import store from '../client/store';
import Routes from '../client/components/Routes';
import authRoutes from './routes/authRoutes';
import jobRoutes from './routes/jobsApi';

import loadable from '../dist/loadable.json';

const app = express();
const compiler = webpack(config);
const isProduction = process.env.NODE_ENV === 'production';

const { PORT = 5000 } = process.env;
const mongoUrl = process.env.MONGODB_URI || 'mongodb://localhost/bp_db';
const { cookieKey } = process.env.COOKIE_KEY;

require('./models/User');
require('./services/passport');

app.use(compression());

/* ORDER MATTERS ! */

app.use(express.static('dist'));
app.use(passport.initialize());
app.use(passport.session());

mongoose.Promise = global.Promise;
mongoose.connect(mongoUrl);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [cookieKey],
  })
);

if (!isProduction) {
  app.use(webpackDevMiddleware(compiler, config.devServer));
  app.use(webpackHotMiddleware(compiler));
  console.log('\n');
  console.log('....Webpack Dev & Hot Middleware Enabled....');
  console.log('\n');
}

authRoutes(app);
jobRoutes(app);

app.get('*', (request, response) => {
  const context = {};

  if (context.url) {
    response.redirect(301, context.url);
  }

  const matchedPromises = matchRoutes(Routes, request.path)
    .map(({ route }) => {
      const { loadData } = route;
      return loadData ? loadData(store, request) : null;
    })
    /* eslint-disable-next-line */
    .map(promise => {
      if (promise) {
        return new Promise(resolve => {
          promise.then(resolve).catch(resolve);
        });
      }
    });

  /* eslint-disable-next-line */
  Promise.all(matchedPromises).then(() => {
    const html = ReactDOMServer.renderToString(
      <Provider store={store}>
        <StaticRouter location={request.path} context={context}>
          {renderRoutes(Routes)}
        </StaticRouter>
      </Provider>
    );
    if (isProduction) {
      const { main, vendor } = loadable.entrypoints;
      const mainJSFiles = (main.assets || [])
        .filter(asset => asset.endsWith('.js'))
        .map(asset => `<script src="${asset}"></script>`);
      const vendorJSFiles = (vendor.assets || [])
        .filter(asset => asset.endsWith('.js'))
        .map(asset => `<script src="${asset}"></script>`);
      const mainStyleSheets = (main.assets || [])
        .filter(asset => asset.endsWith('.css'))
        .map(
          asset => `<link href="${asset}" rel="stylesheet" type="text/css">`
        );

      const jsFiles = Array.from(new Set(mainJSFiles, vendorJSFiles));

      return response.send(`
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            ${mainStyleSheets.map(file => file)}
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
            ${jsFiles.map(file => file).join('')}
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
        <link href="main.css" rel="stylesheet">
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
        <script src="main-bundle.js"></script>
      </body>
    </html>
  `);
  });
});

app.listen(PORT, () => console.log(`They came from http://localhost:${PORT}`)); // eslint-disable-line
