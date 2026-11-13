import { Router } from 'express';
import { supabase } from '../supabase';
import { en } from '../../locales/en';

const router = Router();

router.post('/login', async (req, res) => {
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

export default router;
