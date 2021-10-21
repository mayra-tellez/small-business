import React from 'react';
import {
  TextField,
  Button,
  Container
} from '@material-ui/core';

export default function Login(props) {
  return (
    <Container maxWidth="sm">
      <h2>{props.user.username}</h2>
      <form>
        <TextField
          required
          // onChange={this.handleTextChange}
          // value={this.state.username}
          name="username"
          label="Username"
          type="text" />
        <TextField
          required
          // onChange={this.handleTextChange}
          // value={this.state.password}
          name="password"
          label="Password"
          type="password" />
        <Button
          type="submit"
          className="login-button"
          variant="contained"
          color="primary">Login</Button>
      </form>
    </Container>
  )
}