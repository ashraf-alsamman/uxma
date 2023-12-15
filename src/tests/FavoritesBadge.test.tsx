import React from 'react';
import { render, screen } from '@testing-library/react';
import FavoritesBadge from '../components/FavoritesBadge';
import '@testing-library/jest-dom';
describe('FavoritesBadge Component', () => {
  it('renders without crashing', () => {
    render(<FavoritesBadge favoritesCount={0} />);
    expect(screen.getByLabelText('show favorites')).toBeInTheDocument();
  });

  it('displays the correct favorites count', () => {
    const testCount = 5;
    render(<FavoritesBadge favoritesCount={testCount} />);
    expect(screen.getByText(testCount.toString())).toBeInTheDocument();
  });

  it('displays the favorite icon', () => {
    render(<FavoritesBadge favoritesCount={0} />);
    expect(
      screen.getByLabelText('show favorites').querySelector('svg')
    ).toBeInTheDocument();
  });
});
