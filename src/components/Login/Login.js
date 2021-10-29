import React from 'react';
import {
  TextField,
  Button,
  Container
} from '@material-ui/core';

export default function Login({ user }) {
  
  console.log('user', user);
  
  // ; max-age=300 (in seconds(aka 5 minutes))
  const login = (e) => {
    e.preventDefault()
    document.cookie = "loggedIn=true"
    window.location.replace("/")
  }

  return (
    <Container maxWidth="sm">
      <form onSubmit={login}>
        <TextField
          required
          name="username"
          label="Username"
          type="text" />
        <TextField
          required
          name="password"
          label="Password"
          type="password" />
        <Button
          type="submit"
          className="login-button"
          variant="contained"
          color="primary">
        Login</Button>
      </form>
    </Container>
  )
}