import React from 'react';
import { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@material-ui/core'

import { businesses } from '../data/businesses';

function Listing() {
  const [list, setList] = useState(businesses);

  useEffect(() => {
    console.log("business list:", list);
  }, [list]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Hours</TableCell>
            <TableCell>Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((business) => (
            <TableRow
              key={business.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {business.name}
              </TableCell>
              <TableCell>{business.description}</TableCell>
              <TableCell>{business.operatingHours}</TableCell>
              <TableCell>{business.address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Listing;