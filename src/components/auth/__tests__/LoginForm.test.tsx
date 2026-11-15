import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { jest } from '@jest/globals';
import { login } from '../../../lib/api';
import LoginForm from '../LoginForm';

jest.mock('../../../lib/api', () => ({
  login: jest.fn(),
}));

const mockLogin = jest.mocked(login);

describe('LoginForm', () => {
  beforeEach(() => {
    mockLogin.mockReset();
  });

  it('submits the email and password and returns the token', async () => {
    const onLogin = jest.fn();
    mockLogin.mockResolvedValue({ token: 'test-token' });

    render(<LoginForm onLogin={onLogin} />);
    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'admin@example.com' },
    });
    fireEvent.change(screen.getByLabelText('Password'), {
      target: { value: 'test-password' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Sign in' }));

    await waitFor(() => {
      expect(mockLogin).toHaveBeenCalledWith(
        'admin@example.com',
        'test-password'
      );
    });
    expect(onLogin).toHaveBeenCalledWith('test-token');
    expect(screen.getByText('Sign in successful.')).toBeInTheDocument();
  });

  it('shows the login error and does not return a token when sign-in fails', async () => {
    const onLogin = jest.fn();
    mockLogin.mockRejectedValue(new Error('Invalid credentials'));

    render(<LoginForm onLogin={onLogin} />);
    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'admin@example.com' },
    });
    fireEvent.change(screen.getByLabelText('Password'), {
      target: { value: 'wrong-password' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Sign in' }));

    expect(await screen.findByText('Invalid credentials')).toBeInTheDocument();
    expect(onLogin).not.toHaveBeenCalled();
  });

  it('reports an error if the response has no authentication token', async () => {
    mockLogin.mockResolvedValue({});

    render(<LoginForm onLogin={jest.fn()} />);
    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'admin@example.com' },
    });
    fireEvent.change(screen.getByLabelText('Password'), {
      target: { value: 'test-password' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Sign in' }));

    expect(
      await screen.findByText(
        'The server did not return an authentication token.'
      )
    ).toBeInTheDocument();
  });
});
