import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import HeaderComponent from '../components/HeaderComponent';

const mockStore = configureMockStore();
const store = mockStore({
  favorites: {
    items: [],
  },
});

describe('HeaderComponent', () => {
  const mockOnFilterChange = jest.fn();
  const mockOnSortChange = jest.fn();

  it('renders without crashing', () => {
    render(
      //@ts-ignore
      <Provider store={store}>
        <HeaderComponent
          onFilterChange={mockOnFilterChange}
          onSortChange={mockOnSortChange}
          favoritesCount={0}
          isFilterActive={false}
        />
      </Provider>
    );
  });
});
