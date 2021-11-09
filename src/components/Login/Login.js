import React, { useState } from 'react';
import {
  TextField,
  Button
} from '@material-ui/core';
import styles from './login.module.css';

export default function Login({ user, userLogin }) {
  console.log('user:', user);

  const [newUser, setNewUser] = useState({ username: "" });

  const handleChange = (e) => {
    const newState = { ...newUser };
    newState[e.target.name] = e.target.value;

    setNewUser(newState);
  }
  
  const handleLogin = (e) => {
    e.preventDefault();

    const payload = { ...newUser };
    userLogin(payload);

    document.cookie = "loggedIn=true";
    window.location.replace("/");
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleLogin} className={styles.form}>
        <TextField
          name="username"
          label="Username"
          type="text"
          value={newUser.username}
          onChange={handleChange} />
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