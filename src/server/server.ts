import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { createClient } from '@supabase/supabase-js';
import { en } from '../locales/en';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error('SUPABASE_URL and SUPABASE_SERVICE_KEY must be configured.');
}

const app = express();
const port = Number.parseInt(process.env.PORT ?? '3000', 10);
const allowedOrigins = [
  'http://localhost:5173',
  'https://hollysartstudio.co.uk',
  'https://www.hollysartstudio.co.uk',
];
const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});

app.use(cors({ origin: allowedOrigins }));
app.use(express.json());

app.post('/api/admin/login', async (req, res) => {
  try {
    const { email, password } = req.body ?? {};
    if (typeof email !== 'string' || typeof password !== 'string') {
      res.status(400).json({ error: en.auth.emailAndPasswordRequired });
      return;
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error || !data.session) {
      res.status(401).json({ error: en.auth.invalidCredentials });
      return;
    }

    res.json({ token: data.session.access_token });
  } catch (error: unknown) {
    console.error('Admin login failed:', error);
    res.status(500).json({ error: en.auth.unableToSignIn });
  }
});

app.get('/api/health', (_req, res) => {
  res.json({ status: 'Express API is running.' });
});

app.listen(port, () => {
  console.log(`Studio API running on port ${port}`);
});
