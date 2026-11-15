import { Router } from 'express';
import { supabase } from '../supabase';

const router = Router();

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body ?? {};
    if (typeof email !== 'string' || typeof password !== 'string') {
      res.status(400).json({ error: 'Email and password are required.' });
      return;
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error || !data.session) {
      res.status(401).json({ error: 'Invalid login credentials.' });
      return;
    }

    res.json({ token: data.session.access_token });
  } catch (error: unknown) {
    console.error('Admin login failed:', error);
    res.status(500).json({ error: 'Unable to sign in right now.' });
  }
});

export default router;
