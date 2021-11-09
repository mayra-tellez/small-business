import React from 'react';
import cookie from 'cookie';
import styles from './statusBar.module.css';

export default function StatusBar({ user }) {
  console.log('statusbar props user:', user);
  

  const cookies = cookie.parse(document.cookie);

  return (
    <div className={styles.bar}>
      {cookies.loggedIn && <p className={styles.text}>Logged in as: {user}</p>}
    </div>
  )
}