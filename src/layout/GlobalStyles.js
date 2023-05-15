import { GlobalStyles } from '@mui/material';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

export const GlobalStylesProvider = (
  <GlobalStyles
    styles={{
      '*': {
        boxSizing: 'border-box',
        padding: '0',
        margin: '0',
      },
      body: {
        backgroundImage: 'linear-gradient(to right, #aeeed3, #6c3c77)',
        padding: '0 20px',
        margin: '0',
        overflowY: 'scroll',
        overflow: 'overlay',
      },

      scrollbarWidth: '5px',
      scrollbarColor: 'rgba(0, 0, 0, 0.2) rgba(0, 0, 0, 0.1)',
      '&::-webkit-scrollbar': {
        width: '5px',
      },
      '&::-webkit-scrollbar-track': {
        background: 'rgba(0, 0, 0, 0.1)',
      },
      '&::-webkit-scrollbar-thumb': {
        background: 'rgba(0, 0, 0, 0.2)',
      },
    }}
  />
);

let theme = createTheme({
  palette: {
    primary: {
      main: '#9925be',
    },
    secondary: {
      main: '#be4d25',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },

  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: '#441155',

          '&:hover': {
            backgroundColor: 'rgba(190, 77, 37, 0.2)',
            boxShadow:
              'inset 0 0 3px 3px rgba(153, 37, 190, 0.1), 0 0 3px 3px rgba(153, 37, 190, 0.1)',
          },
        },
      },
    },

    MuiLink: {
      styleOverrides: {
        root: {
          color: '#441155',
          textDecoration: 'none',
          fontFamily:
            'apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
          fontWeight: '600',
          fontSize: '1.2rem',
          display: 'inline-block',
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
