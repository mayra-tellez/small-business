import React, { useState } from 'react';
import {
  TextField,
  Button
} from '@material-ui/core';

import styles from './addListing.module.css';

export default function AddListing({ businesses, addListing }) {
  console.log('add listing props:', businesses.length)

  const [listing, setListing] = useState({
    name: "",
    address: "",
    operatingHours: "",
    description: ""
  });

  const handleChange = (e) => {
    let newListing = { ...listing };
    newListing[e.target.id] = e.target.value;
    
    setListing(newListing);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = { ...listing };
    payload.id = businesses.length + 1;
    addListing(payload);

    setListing({
      name: "",
      address: "",
      operatingHours: "",
      description: ""
    })
  }


  return (
    <div className={styles.mainContainer}>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <TextField
            name="name"
            label="Name"
            type="text"
            id="name"
            value={listing.name}
            onChange={handleChange} />
          <TextField
            name="address"
            label="Address"
            type="text"
            id="address"
            value={listing.address}
            onChange={handleChange} />
          <TextField
            name="operatingHours"
            label="Hours (ex: 8AM - 9PM)"
            type="text" 
            id="operatingHours"
            value={listing.operatingHours}
            onChange={handleChange} />
          <TextField
            name="description"
            label="Description"
            type="text" 
            id="description"
            value={listing.description}
            onChange={handleChange} />
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