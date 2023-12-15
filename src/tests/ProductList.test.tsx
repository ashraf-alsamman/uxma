import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom';
import ProductList from '../components/ProductList';
import { fetchProducts } from '../redux/slices/productsSlice';

const mockStore = configureStore([]);

describe('ProductList Component', () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      products: {
        items: [
          {
            id: 1,
            title: 'Product 1',
            price: 100,
          },
          {
            id: 2,
            title: 'Product 2',
            price: 200,
          },
        ],
      },
    });

    store.dispatch = jest.fn();
  });

  test('renders ProductList and dispatches fetchProducts action on mount', () => {
    render(
      <Provider store={store}>
        <ProductList
          showFavoritesOnly={false}
          favoriteItems={[]}
          sortOrder=""
        />
      </Provider>
    );

    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Product 2')).toBeInTheDocument();
  });
});
