import React from 'react';
import {
  TextField,
  Button
} from '@material-ui/core';

import styles from './addListing.module.css';

export default function AddListing(props) {

  return (
    <div className={styles.mainContainer}>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <TextField
            name="name"
            label="Name"
            type="text" />
          <TextField
            name="address"
            label="Address"
            type="text" />
          <TextField
            name="hours"
            label="Hours (ex: 8AM - 9PM)"
            type="text" />
          <TextField
            name="description"
            label="Description"
            type="text" />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: 25 }}>
          Save</Button>
        </form>
      </div> 
    </div>
  )
}