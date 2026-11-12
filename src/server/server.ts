import cors from 'cors';
import express from 'express';
import authRouter from './routes/auth';

const app = express();
const port = Number.parseInt(process.env.PORT ?? '3000', 10);
const allowedOrigins = [
  'http://localhost:5173',
  'https://hollysartstudio.co.uk',
  'https://www.hollysartstudio.co.uk',
];

app.use(cors({ origin: allowedOrigins }));
app.use(express.json());
app.use('/api/admin', authRouter);

app.get('/api/health', (_req, res) => {
  res.json({ status: 'Express API is running.' });
});

app.listen(port, () => {
  console.log(`Studio API running on port ${port}`);
});
