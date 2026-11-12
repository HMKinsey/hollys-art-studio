import { Router } from 'express';
import { supabase } from '../supabase';
import { en } from '../../locales/en';

const router = Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: en.auth.emailAndPasswordRequired });
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return res.status(401).json({ error: en.auth.invalidCredentials });
  }

  res.json({
    message: en.auth.signInSuccess,
    token: data.session.access_token,
  });
});

export default router;
