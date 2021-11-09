import React from 'react';
import { Link } from 'react-router-dom';
import cookie from 'cookie';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import styles from './listing.module.css';

export default function Listing({ businesses, deleteListing, user }) {
  console.log(user)
  const cookies = cookie.parse(document.cookie);

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
              {
                cookies.loggedIn ? (<TableCell style={{ color: "gray", fontWeight: "bold", fontSize: "13px" }}>Delete</TableCell>) : null
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {businesses.map((business, idx) => (
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
                {
                  cookies.loggedIn ? 
                  (<TableCell>
                    <IconButton onClick={() => deleteListing(idx)} aria-label="delete" size="medium">
                      <DeleteIcon className={styles.delete} />
                    </IconButton>
                  </TableCell>) :
                  null
                }
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}