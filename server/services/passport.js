/* eslint-disable consistent-return */

import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import mongoose from 'mongoose';

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((userID, done) => {
  User.findById(userID).then(foundUser => {
    done(null, foundUser);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback',
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleID: profile.id });
      if (existingUser) {
        return done(null, existingUser);
      }
      const newUser = await new User({ googleID: profile.id }).save();
      done(null, newUser);
    }
  )
);
