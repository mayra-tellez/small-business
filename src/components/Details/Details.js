import React from 'react';

export default function Details(props) {
  const id = props.match.params.id;
  const business = props.businesses.find(b => b.id == id);

  return (
    <div>
      <h2>{business.name}</h2>
      <h3>{business.address}</h3>
      <h3>{business.operatingHours}</h3>
      <p>{business.description}</p>
      <p>*********Google Map Goes Here*********</p>
    </div>
  )
}