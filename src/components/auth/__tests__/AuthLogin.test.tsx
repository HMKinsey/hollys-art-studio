import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AuthLogin from '../AuthLogin';

jest.mock('../../../lib/api', () => ({
  login: jest.fn(),
}));

jest.mock('../ConfigurationPage', () => ({
  __esModule: true,
  default: ({ accessToken }: { accessToken: string }) => (
    <div>Admin configuration token: {accessToken}</div>
  ),
}));

describe('AuthLogin', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('shows the sign-in form when there is no saved token', () => {
    render(<AuthLogin />);

    expect(
      screen.getByRole('heading', { name: 'Admin sign in' })
    ).toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: 'Sign out' })
    ).not.toBeInTheDocument();
  });

  it('shows the admin configuration and clears the token on sign out', () => {
    localStorage.setItem('studioAdminToken', 'saved-token');

    render(<AuthLogin />);

    expect(
      screen.getByText('Admin configuration token: saved-token')
    ).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Sign out' }));

    expect(localStorage.getItem('studioAdminToken')).toBeNull();
    expect(
      screen.getByRole('heading', { name: 'Admin sign in' })
    ).toBeInTheDocument();
  });
});
