import React from 'react';
import { Link } from 'react-router-dom';
import cookie from 'cookie';

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button
} from '@material-ui/core';
import styles from './navbar.module.css';

export default function NavBar() {
  const cookies = cookie.parse(document.cookie);
  console.log('navBar cookies status:', cookies.loggedIn);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ backgroundColor: "#3CB371" }} position="static">
        <Toolbar className={styles.toolBar}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Austin Small Business
          </Typography>
          <div>
            <Button style={{ textTransform: "none" }} color="inherit">
              <Link to="/" className={styles.link}>Listings</Link>
            </Button>
            { cookies.loggedIn && 
              <Button style={{ textTransform: "none" }} color="inherit">
                <Link to="/addlisting" className={styles.link}>Add</Link>
              </Button> }
            { cookies.loggedIn ? 
              <Button onClick={() => {document.cookie = "loggedIn="; window.location.replace("/")}} style={{ textTransform: "none" }} color="inherit">
                Logout
              </Button> :
              <Button style={{ textTransform: "none" }} color="inherit">
                <Link to="/login" className={styles.link}>Login</Link>
              </Button> }
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
