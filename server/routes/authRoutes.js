import passport from 'passport';

export default app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: [ 'profile', 'email' ],
    }),
  );

  app.get('/auth/google/callback', passport.authenticate('google'), (request, response) => {
    response.redirect('/');
  });

  app.get('/api/logout', (request, response) => {
    request.logout();
    response.redirect('/');
  });

  app.get('/api/current_user', (request, response) => {
    const { user = {} } = request;
    response.send(user);
  });
};
