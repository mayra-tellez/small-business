import React from 'react';
import {
  TextField,
  Button,
  Container
} from '@material-ui/core';

export default function Login() {
  const login = (e) => {
    e.preventDefault()
    // max-age = 300 (in seconds(aka 5 minutes))
    document.cookie = "loggedIn=true; max-age=300"
    window.location.replace("/")
  }

  return (
    <Container maxWidth="sm">
      <form onSubmit={login}>
        <TextField
          required
          // onChange={handleChange}
          // value={value}
          name="username"
          label="Username"
          type="text" />
        <TextField
          required
          // onChange={handleChange}
          // value={value}
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