import React from 'react';
import { useState, useEffect } from 'react';

import { businesses } from '../data/businesses';

function Listing() {
  const [list, setList] = useState(businesses);

  useEffect(() => {
    console.log("business list:", list);
  }, [list]);

  return (
    <ul>
      {businesses.map((business) => {
        return <li key={business.id}>{business.name}</li>
      })}
    </ul>
  )
}

export default Listing;