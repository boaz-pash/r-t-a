import { postgraphile } from 'postgraphile';

const databaseURL = 'postgres://postgres:boaz@localhost:5432/r-t-e';

const postgraphileMiddleware = postgraphile(databaseURL, 'user_schema', {
  watchPg: true,
  enhanceGraphiql: true,
  jwtSecret: 'r-t-e-project@hatal.boaz123207866211',
  graphiql: true,
});

export default postgraphileMiddleware;
