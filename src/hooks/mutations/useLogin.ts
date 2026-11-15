import { useMutation } from '@tanstack/react-query';
import { login } from '../../api/client';
import { en } from '../../locales/en';

interface LoginVariables {
  email: string;
  password: string;
}

export function useLogin() {
  return useMutation({
    mutationFn: async ({ email, password }: LoginVariables) => {
      const data = await login(email, password);

      if (typeof data.token !== 'string') {
        throw new Error(en.auth.missingAuthenticationToken);
      }

      return data.token;
    },
  });
}
