import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AdminPage from '../../src/pages/AdminPage';

jest.mock('../../src/api/client', () => ({
  login: jest.fn(),
}));

jest.mock('../../src/components/auth/ConfigurationPage', () => ({
  __esModule: true,
  default: () => <div>Admin configuration</div>,
}));

describe('AdminPage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders the admin sign-in form for a signed-out visitor', () => {
    render(<AdminPage />);

    expect(
      screen.getByRole('heading', { name: 'Admin sign in' })
    ).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
  });
});
