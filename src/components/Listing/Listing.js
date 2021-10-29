import React from 'react';
import { Link } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@material-ui/core';

import styles from './listing.module.css';

export default function Listing({ businesses, user }) {

  console.log('listing user console log:', user);

  return (
    <div className={styles.container}>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ color: "gray", fontWeight: "bold", fontSize: "13px" }} width="15%" >Name</TableCell>
              <TableCell style={{ color: "gray", fontWeight: "bold", fontSize: "13px" }} width="60%" >Description</TableCell>
              <TableCell style={{ color: "gray", fontWeight: "bold", fontSize: "13px" }} width="10%" >Hours</TableCell>
              <TableCell style={{ color: "gray", fontWeight: "bold", fontSize: "13px" }} width="15%" >Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {businesses.map((business) => (
              <TableRow
                key={business.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Link to={`/business/${business.id}`} className={styles.name}>{business.name}</Link>
                </TableCell>
                <TableCell>{business.description}</TableCell>
                <TableCell>{business.operatingHours}</TableCell>
                <TableCell>{business.address}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}