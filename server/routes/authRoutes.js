import passport from 'passport';

export default app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (request, response) => {
      response.cookie('asx_data', request.user.token);
      response.redirect('/');
    }
  );

  app.get('/api/logout', (request, response) => {
    response.clearCookie('asx_data');
    response.redirect('/');
  });
};
