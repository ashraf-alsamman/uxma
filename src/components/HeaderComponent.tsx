import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { FavoritesBadge } from './FavoritesBadge';

interface HeaderComponentProps {
  onFilterChange: (isFiltered: boolean) => void;
  onSortChange: (sortOrder: string) => void;
  favoritesCount: number;
  isFilterActive: boolean;
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({
  onFilterChange,
  onSortChange,
  favoritesCount,
  isFilterActive,
}) => {
  const favoriteItems = useSelector(
    (state: RootState) => state.favorites.items
  );

  return (
    <Grid container sx={{ my: 3, fontSize: 12 }}>
      <FavoritesBadge favoritesCount={favoriteItems.length} />
      <FormControlLabel
        sx={{ fontSize: 12, color: 'GrayText' }}
        control={
          <Switch
            checked={isFilterActive && favoritesCount > 0}
            onChange={(e) => onFilterChange(e.target.checked)}
            disabled={favoritesCount === 0}
            color="primary"
          />
        }
        label="Show Favorites Only"
      />

      <Select
        defaultValue=""
        onChange={(e) => onSortChange(e.target.value as string)}
        displayEmpty
        sx={{ fontSize: 12, color: 'GrayText' }}
      >
        <MenuItem value="">No Sorting</MenuItem>
        <MenuItem value="asc">Price Low to High</MenuItem>
        <MenuItem value="desc">Price High to Low</MenuItem>
      </Select>
    </Grid>
  );
};

export default HeaderComponent;
