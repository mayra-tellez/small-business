import React from 'react';
import cookie from 'cookie';
import styles from './statusBar.module.css';

export default function StatusBar() {
  const cookies = cookie.parse(document.cookie);
  console.log('statusBar cookies status:', cookies.loggedIn);

  return (
    <div className={styles.bar}>
      {cookies.loggedIn && <p className={styles.text}>Logged in as:</p>}
    </div>
  )
}