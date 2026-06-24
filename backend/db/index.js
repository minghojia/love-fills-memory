const { Pool } = require("pg");

const pool = new Pool({
  user: "dev",
  host: "localhost",
  database: "postgres",
  password: "devpassword",
  port: 5432,
});

module.exports = pool;