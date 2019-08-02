import proxy from 'http-proxy-module';

export default app => {
  app.use(proxy('/api/*', { target: 'http://localhost:5000/' }));
  app.use(proxy('/auth/google', { target: 'http://localhost:5000/' }));
};
