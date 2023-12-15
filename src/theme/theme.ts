import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#183f4d',
    },
    secondary: {
      main: '#fff',
    },
    background: {
      default: '#f0f7fa',
      paper: '#fff',
    },
    text: {
      primary: 'rgb(16, 44, 53)',
      secondary: '#183f4d',
    },
  },
  typography: {
    fontSize: 13,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
        },
      },
    },
  },
});

export default theme;
