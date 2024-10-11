"use client";

import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Create a custom theme with red as the primary color
const theme = createTheme({
  palette: {
    primary: {
      main: '#6a1b9a', // Purple color
      contrastText: '#fff', // Text color to contrast the purple background
    },
    text: {
      primary: '#fff', // Text inside the app bar is white
    },
  },
}); 

const Header = () => {
  const router = useRouter();

  const handleNavigation = (path) => {
    console.log(`Navigating to ${path}`);
    router.push(path);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" sx={{ backgroundColor: theme.palette.primary.main }}>
        <Toolbar>
          <Typography
            variant="h6"
            onClick={() => handleNavigation('/')}
            sx={{ flexGrow: 1, cursor: 'pointer', color: theme.palette.text.primary }}
          >
            Home
          </Typography>

          <Button color="inherit" onClick={() => handleNavigation('/Goals')}>
            Goals
          </Button>
          <Button color="inherit" onClick={() => handleNavigation('/Topics')}>
            Topics
          </Button>
          <Button color="inherit" onClick={() => handleNavigation('/Sources')}>
            Sources
          </Button>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
