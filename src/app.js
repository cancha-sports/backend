import express from 'express';

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
  res.status(200).json({ ok: 'true' });
});

export default app;
