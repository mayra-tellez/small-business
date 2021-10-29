import React from 'react';
import {
  TextField,
  Button
} from '@material-ui/core';
import styles from './login.module.css';

export default function Login({ user }) {
  
  console.log('user', user);
  
  // ; max-age=300 (in seconds(aka 5 minutes))
  const login = (e) => {
    e.preventDefault()
    document.cookie = "loggedIn=true"
    window.location.replace("/")
  }

  return (
    <div className={styles.container}>
      <form onSubmit={login} className={styles.form}>
        <TextField
          name="username"
          label="Username"
          type="text" />
        <TextField
          name="password"
          label="Password"
          type="password" />
        <Button
          type="submit"
          variant="contained"
          style={{ marginTop: 25, fontWeight: "bold" }}>
        Login</Button>
      </form>
    </div>
  )
}