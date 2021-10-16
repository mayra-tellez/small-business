import React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button
} from '@material-ui/core';
import styles from './navbar.module.css';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ backgroundColor: "#43a047" }} position="static">
        <Toolbar className={styles.toolBar}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Austin Small Business
          </Typography>
          <div>
            <Button style={{ textTransform: "none" }} color="inherit">Listings</Button>
            <Button style={{ textTransform: "none" }} color="inherit">Login</Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
