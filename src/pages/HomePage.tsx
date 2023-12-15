import React from 'react';
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import HeaderComponent from '../components/HeaderComponent';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';
import Container from '@mui/material/Container';

const HomePage = () => {
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [sortOrder, setSortOrder] = useState('');
  const favoriteItems = useSelector(
    (state: RootState) => state.favorites.items
  );

  const handleFilterChange = (isFiltered: boolean) => {
    setShowFavoritesOnly(isFiltered);
  };

  const handleSortChange = (order: string) => {
    setSortOrder(order);
  };

  useEffect(() => {
    if (favoriteItems.length === 0) {
      setShowFavoritesOnly(false);
    }
  }, [favoriteItems.length]);

  return (
    <>
      <AppBar
        position="static"
        sx={{ bgcolor: 'primary.dark', color: 'white' }}
      >
        <Toolbar>
          <Container>
            <Typography variant="body1" align="center" color="#fff">
              UXMA
            </Typography>
          </Container>
        </Toolbar>
      </AppBar>
      <Container>
        <HeaderComponent
          onFilterChange={handleFilterChange}
          onSortChange={handleSortChange}
          favoritesCount={favoriteItems.length}
          isFilterActive={showFavoritesOnly}
        />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <ProductList
              showFavoritesOnly={showFavoritesOnly && favoriteItems.length > 0}
              favoriteItems={favoriteItems}
              sortOrder={sortOrder}
            />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
