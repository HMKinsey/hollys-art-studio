import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PortfolioTabs } from '../../../src/components/tabs/PortfolioTabs';

describe('PortfolioTabs', () => {
  it('starts on the home tab and displays its content', () => {
    render(<PortfolioTabs />);

    expect(
      screen.getByRole('tab', { name: 'Live Wedding Painting' })
    ).toHaveAttribute('aria-selected', 'true');
    expect(
      screen.getByRole('heading', {
        name: 'Add a little magic to your special day with live wedding painting',
      })
    ).toBeInTheDocument();
    expect(document.getElementById('panel-home')).not.toHaveAttribute('hidden');
  });

  it('changes the selected tab and panel when a tab is clicked', () => {
    render(<PortfolioTabs />);

    fireEvent.click(screen.getByRole('tab', { name: 'Gallery' }));

    expect(screen.getByRole('tab', { name: 'Gallery' })).toHaveAttribute(
      'aria-selected',
      'true'
    );
    expect(screen.getByRole('heading', { name: 'Recent Work' })).toBeVisible();
    expect(
      screen.getByRole('tab', { name: 'Live Wedding Painting' })
    ).toHaveAttribute('aria-selected', 'false');
  });

  it('supports ArrowRight and Home keyboard navigation', () => {
    render(<PortfolioTabs />);

    const homeTab = screen.getByRole('tab', { name: 'Live Wedding Painting' });
    fireEvent.keyDown(homeTab, { key: 'ArrowRight' });

    const processTab = screen.getByRole('tab', { name: 'The Process' });
    expect(processTab).toHaveAttribute('aria-selected', 'true');
    expect(processTab).toHaveFocus();
    expect(screen.getByRole('heading', { name: 'The Process' })).toBeVisible();

    fireEvent.keyDown(processTab, { key: 'Home' });
    expect(homeTab).toHaveAttribute('aria-selected', 'true');
    expect(homeTab).toHaveFocus();
  });
});
