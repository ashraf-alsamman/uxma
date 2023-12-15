import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../redux/slices/favoritesSlice';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  IconButton,
} from '@mui/material';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { Product } from '../types';
import { RootState } from '../redux/store';

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites);
  const isFavorite = favorites?.items?.includes(product.id);

  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt={product.title}
      />
      <CardContent>
        <Typography gutterBottom variant="subtitle1" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${product.price}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          onClick={() => dispatch(toggleFavorite(product.id))}
        >
          {isFavorite ? <MdFavorite /> : <MdFavoriteBorder />}
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProductItem;
