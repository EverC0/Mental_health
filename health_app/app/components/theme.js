"use client";

import { createTheme } from '@mui/material/styles';

// Define a custom font (e.g., Proxima Nova)
const customFont = "'Proxima Nova', sans-serif";

const theme = createTheme({
  palette: {
    mode: 'light', // Light theme mode for a calming and bright interface
    primary: {
      main: '#81c784', // A soft green for primary elements (symbolizing health and calm)
      contrastText: '#ffffff', // Ensures text on primary elements is readable
    },
    secondary: {
      main: '#ffb74d', // A warm, inviting orange for secondary elements (symbolizing energy)
      contrastText: '#000000', // Text color for contrast on secondary elements
    },
    background: {
      default: '#f3f4f6', // Very light background to maintain a peaceful aesthetic
      paper: '#ffffff',   // White background for paper components for clarity
    },
    text: {
      primary: '#333333', // Soft dark color for better readability
      secondary: '#6d6d6d', // Light grey for secondary text, not too harsh
    },
    action: {
      active: '#ffb74d', // Active elements like buttons or selected items
    },
  },
  typography: {
    fontFamily: customFont, // Apply the custom font globally
    h1: {
      fontFamily: customFont,
      fontWeight: 700,
      color: '#333333', // Soft dark color for headers
    },
    h2: {
      fontFamily: customFont,
      fontWeight: 600,
      color: '#444444', // Slightly lighter than h1
    },
    body1: {
      fontFamily: customFont,
      fontWeight: 400,
      color: '#555555', // A bit lighter for body text
    },
    button: {
      fontFamily: customFont,
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // Prevents all-caps in buttons
          fontWeight: 'bold', // Makes button text bold for emphasis
          borderRadius: '12px', // Rounded button corners for a softer look
        },
        containedPrimary: {
          backgroundColor: '#81c784',
          color: '#ffffff',
          '&:hover': {
            backgroundColor: '#66bb6a', // Slightly darker shade on hover
          },
        },
        containedSecondary: {
          backgroundColor: '#ffb74d',
          color: '#000000',
          '&:hover': {
            backgroundColor: '#ffa726', // Slightly darker shade on hover
          },
        },
      },
    },
  },
});

export default theme;
