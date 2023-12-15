import React from 'react';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';

interface FavoritesBadgeProps {
  favoritesCount: number;
}

export const FavoritesBadge: React.FC<FavoritesBadgeProps> = ({
  favoritesCount,
}) => {
  return (
    <IconButton aria-label="show favorites">
      <Badge badgeContent={favoritesCount} color="secondary">
        <MdFavorite />
      </Badge>
    </IconButton>
  );
};

export default FavoritesBadge;
