import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AdminPage from '../AdminPage';

jest.mock('../../lib/api', () => ({
  login: jest.fn(),
}));

jest.mock('../../components/auth/ConfigurationPage', () => ({
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
