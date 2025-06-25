import express from 'express';
import cors from 'cors';
import pg from 'pg';
import dotenv from 'dotenv';

const { Pool } = pg;

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.post('/api/messages', async (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    await pool.query(
      'INSERT INTO messages (name, email, subject, message) VALUES ($1, $2, $3, $4)',
      [name, email, subject, message]
    );
    res.status(200).json({ message: 'Message saved successfully' });
  } catch (err) {
    console.error('Error saving message:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
