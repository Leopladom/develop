import * as React from 'react';
import { AppBar, Box, Toolbar, Button, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';

function MyAppBar() {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: '80px' }}> {/* Margen inferior añadido */}
      <AppBar position="fixed">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Button color="inherit" component={RouterLink} to="/" sx={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography variant="h6" component="div">
                ShopCart
              </Typography>
            </Button>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button color="inherit" component={RouterLink} to="/cart">Carrito</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MyAppBar;
