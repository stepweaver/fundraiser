import { createTheme } from '@mui/material/styles';

export const shades = {
  primary: {
    100: '#cccccc',
    200: '#999999',
    300: '#666666',
    400: '#333333',
    500: '#000000',
    600: '#000000',
    700: '#000000',
    800: '#000000',
    900: '#000000'
  },

  secondary: {
    100: "#ccefd9",
    200: "#99e0b3",
    300: "#66d08c",
    400: "#33c166",
    500: "#00b140",
    600: "#008e33",
    700: "#006a26",
    800: "#00471a",
    900: "#00230d"
},

  neutral: {
    100: '#fdfdf8',
    200: '#fbfbf1',
    300: '#f9f9ea',
    400: '#f7f7e3',
    500: '#f5f5dc',
    600: '#c4c4b0',
    700: '#939384',
    800: '#626258',
    900: '#31312c'
  }
};

export const theme = createTheme({
  palette: {
    primary: {
      main: shades.primary[500]
    },
    secondary: {
      main: shades.secondary[500]
    },
    neutral: {
      dark: shades.neutral[700],
      main: shades.neutral[500],
      light: shades.neutral[100]
    }
  },
  typography: {
    fontFamily: ['Amatic SC', 'sans-serif'].join(','),
    fontSize: 11,
    h1: {
      fontFamily: ['Lora', 'sans-serif'].join(','),
      fontSize: 48
    },
    h2: {
      fontFamily: ['Lora', 'sans-serif'].join(','),
      fontSize: 36
    },
    h3: {
      fontFamily: ['Lora', 'sans-serif'].join(','),
      fontSize: 20
    },
    h4: {
      fontFamily: ['Lora', 'sans-serif'].join(','),
      fontSize: 14
    },
  }
})