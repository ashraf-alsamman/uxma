import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, toggleFavorite } from '../redux/slices/productsSlice';
import { Grid } from '@mui/material';
import ProductItem from './ProductItem';
import { RootState, AppDispatch } from '../redux/store';
import { Product } from '../types';

interface ProductListProps {
  showFavoritesOnly: boolean;
  favoriteItems: number[];
  sortOrder: string;
}
const ProductList: React.FC<ProductListProps> = ({
  showFavoritesOnly,
  favoriteItems,
  sortOrder,
}) => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const products = useSelector((state: RootState) => state?.products?.items);

  const filteredProducts = showFavoritesOnly
    ? products.filter((product) => favoriteItems.includes(product.id))
    : products;

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.price - b.price;
    } else if (sortOrder === 'desc') {
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <Grid container spacing={2}>
      {sortedProducts.map((product: Product) => (
        <Grid item xs={12} sm={6} md={3} key={product.id}>
          <ProductItem product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
