import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ProductItem from '../components/ProductItem';
import { toggleFavorite } from '../redux/slices/favoritesSlice';
import '@testing-library/jest-dom';

const mockStore = configureStore();
const store = mockStore({
  favorites: {
    items: [],
  },
});

describe('ProductItem Component', () => {
  const product = {
    id: 1,
    title: 'Test Product',
    price: 19.99,
    image: 'test-image-url',
  };

  beforeEach(() => {
    store.clearActions();
  });

  test('renders product information', () => {
    render(
      // @ts-ignore
      <Provider store={store}>
        <ProductItem product={product} />
      </Provider>
    );

    expect(screen.getByText(product.title)).toBeInTheDocument();
    expect(screen.getByText(`$${product.price}`)).toBeInTheDocument();
    expect(screen.getByAltText(product.title)).toHaveAttribute(
      'src',
      product.image
    );
  });

  test('toggles favorite status when favorite button is clicked', () => {
    render(
      // @ts-ignore
      <Provider store={store}>
        <ProductItem product={product} />
      </Provider>
    );

    const favoriteButton = screen.getByLabelText('add to favorites');
    fireEvent.click(favoriteButton);

    const actions = store.getActions();
    expect(actions[0]).toEqual(toggleFavorite(product.id));
  });
});
