const pg = require('pg');
const sound = require('sound-play');

let config = {};

config = {
  host: 'localhost',
  port: 5432,
  database: 'budget-data',
  max: 10,
  idleTimeoutMillis: 30000,
};

const pool = new pg.Pool(config);

pool.on('connect', () => {
  sound.play('../public/auir.mp3');
  console.log(`My life for Auir`);
});

pool.on('error', (err) => {
  console.log('Unexpected error on idle client', err);
  process.exit(-1);
});

module.exports = pool;