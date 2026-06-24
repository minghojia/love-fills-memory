const { Pool } = require("pg");

const pool = new Pool({
  user: "dev",
  host: "localhost",
  database: "lovefillsmemory",
  password: "devpassword",
  port: 5432,
});

module.exports = pool;