// Prod.js
// Remember to add these Config vars on Heroku before deploying
export default {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  apiKey: process.env.API_KEY,
  apiSecret: process.env.API_SECRET,
  cookieKey: process.env.COOKIE_KEY,
  mongoURI: process.env.MONGODB_URI,
};
