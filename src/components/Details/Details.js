import React from 'react';
import GoogleMap from '../GoogleMap/GoogleMap'
import styles from './details.module.css';

export default function Details(props) {
  const id = props.match.params.id;
  const business = props.businesses.find(b => b.id == id);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.subContainer}>
        <h2>{business.name}</h2>
        <h3>{business.address}</h3>
        <h3>{business.operatingHours}</h3>
        <p className={styles.description}>{business.description}</p>
        <GoogleMap />
      </div>
    </div>
  )
}