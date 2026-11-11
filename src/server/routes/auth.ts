import { Router } from 'express';
import { supabase } from '../supabase';

const router = Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required.' });
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return res.status(401).json({ error: 'Invalid login credentials.' });
  }

  res.json({ 
    message: 'Login successful', 
    token: data.session.access_token 
  });
});

export default router;