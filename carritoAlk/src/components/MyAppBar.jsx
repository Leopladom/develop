import React from 'react';
import { AppBar, Box, Toolbar, Button, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'; 

function MyAppBar() {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: '80px' }}>
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
            <Link to="/#top" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Button color="inherit">
                <Typography variant="h6" component="div">
                  ShopCart
                </Typography>
              </Button>
            </Link>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button color="inherit" component={Link} to="/#bottom">Carrito</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MyAppBar;
