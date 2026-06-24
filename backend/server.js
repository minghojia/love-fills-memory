require("dotenv").config();
const pool = require("./db");
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Simple in-memory storage (temporary)
// let memories = [];

// Health check
app.get("/memory", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM memories ORDER BY created_at DESC"
    );

    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});

// Create memory
app.post("/memory", async (req, res) => {
  const { text } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO memories (content) VALUES ($1) RETURNING *",
      [text]
    );

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

pool.query(`
  CREATE EXTENSION IF NOT EXISTS "pgcrypto";
`);

pool.query(`
  CREATE TABLE IF NOT EXISTS memories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID,
    patient_id UUID,
    content TEXT NOT NULL,
    mood TEXT,
    category TEXT,
    created_at TIMESTAMP DEFAULT NOW()
  );
`);