const pg = require('pg');
const url = require('url');

pg.types.setTypeParser(pg.types.builtins.NUMERIC, (value) => {
  return parseFloat(value);
});
//if there's a numeric type, parse it to float. Not really an elegant solution, certainly hamfisted. But it works for this application

let config = {};

if (process.env.DATABASE_URL) {
  // Heroku gives a url, not a connection object
  // https://github.com/brianc/node-pg-pool
  const params = url.parse(process.env.DATABASE_URL);
  const auth = params.auth.split(':');

  config = {
    user: auth[0],
    password: auth[1],
    host: params.hostname,
    port: params.port,
    database: params.pathname.split('/')[1],
    ssl: { rejectUnauthorized: false },
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
  };
} else {
  config = {
    host: 'localhost',
    port: 5432,
    database: 'budget-data',
    max: 10,
    idleTimeoutMillis: 30000,
  };
}

// this creates the pool that will be shared by all other modules
const pool = new pg.Pool(config);

pool.on('connect', () => {
  console.log('pool connected');
});
// the pool with emit an error on behalf of any idle clients
// it contains if a backend error or network partition happens
pool.on('error', (err) => {
  console.log('Unexpected error on idle client', err);
  process.exit(-1);
});

module.exports = pool;
