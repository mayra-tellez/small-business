import React from 'react';
import cookie from 'cookie';

export default function StatusBar() {
  const cookies = cookie.parse(document.cookie);
  console.log('statusBar cookies status:', cookies.loggedIn);

  return (
    <div>
      {cookies.loggedIn && <p>Status Bar</p>}
    </div>
  )
}