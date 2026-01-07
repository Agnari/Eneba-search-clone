const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

// This runs every time a new client is created in the pool
pool.on('connect', (client) => {
  client.query('SET pg_trgm.similarity_threshold = 0.15;')
    .then(() => console.log('Similarity threshold set to 0.15'))
    .catch(err => console.error('Error setting threshold:', err));
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};