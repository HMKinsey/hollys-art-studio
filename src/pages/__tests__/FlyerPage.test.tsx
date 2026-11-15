import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { jest } from '@jest/globals';
import { FlyerPage } from '../FlyerPage';

describe('FlyerPage', () => {
  it('renders the flyer and prints when the print button is clicked', () => {
    const print = jest.spyOn(window, 'print').mockImplementation(() => {});

    render(<FlyerPage />);
    fireEvent.click(screen.getByRole('button', { name: 'Print flyer' }));

    expect(
      screen.getByText('Fine Art Live Wedding Painting')
    ).toBeInTheDocument();
    expect(
      screen.getByRole('img', {
        name: 'QR code linking to Holly’s Art Studio Instagram',
      })
    ).toBeInTheDocument();
    expect(print).toHaveBeenCalledTimes(1);

    print.mockRestore();
  });
});
