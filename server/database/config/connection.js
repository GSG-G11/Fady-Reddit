require('env2')('config.env');
const { Pool } = require('pg');

// eslint-disable-next-line object-curly-newline
const { NODE_ENV, DATABASE_URL, DEV_DB_URL, TEST_DB_URL } = process.env;

let dburl = '';

switch (NODE_ENV) {
  case 'production':
    dburl = DATABASE_URL;
    break;
  case 'development':
    dburl = DEV_DB_URL;
    break;
  case 'test':
    dburl = TEST_DB_URL;
    break;
  default:
    throw new Error('no database found');
}

const options = {
  connectionString: dburl,
  ssl: { rejectUnauthorized: false },
};

module.exports = new Pool(options);
