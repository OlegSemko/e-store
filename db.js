require('dotenv').config();
const { Client } = require('pg');

const client = new Client({
  // user: 'postgres',
  // host: 'localhost',
  // database: 'postgres',
  // password: '',
  // port: 5432,
  connectionString: process.env.DATABASE_URL
});

client.connect();

process.on('exit', () => {
  client.end();
});

module.exports = client;
