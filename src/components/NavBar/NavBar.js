import React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button
} from '@material-ui/core';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Austin Small Business
          </Typography>
          <div>
            <Button color="inherit">Listings</Button>
            <Button color="inherit">Login</Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
