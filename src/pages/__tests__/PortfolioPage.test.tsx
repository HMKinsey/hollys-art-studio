import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PortfolioPage } from '../PortfolioPage';

describe('PortfolioPage', () => {
  it('renders the portfolio navigation, initial content, and contact links', () => {
    render(<PortfolioPage />);

    expect(
      screen.getByRole('tablist', { name: 'Studio pages' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: 'Add a little magic to your special day with live wedding painting',
      })
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Email' })).toHaveAttribute(
      'href',
      'mailto:hollysartstudio@gmail.com'
    );
    expect(screen.getByRole('link', { name: 'Instagram' })).toHaveAttribute(
      'href',
      'https://www.instagram.com/hollys_art_studio'
    );
  });
});
