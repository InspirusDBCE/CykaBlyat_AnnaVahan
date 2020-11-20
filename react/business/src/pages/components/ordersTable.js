import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { useSelector } from 'react-redux';

const useStyles = makeStyles({
  table: {
    minWidth: 6,
    boxShadow: "0",
  },
});


export default function OrdersTable() {
  const classes = useStyles();
  const store = useSelector(state => state);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table stickyHeader className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell><b>Client</b></TableCell>
              <TableCell align="right"><b>Food</b></TableCell>
              <TableCell align="right"><b>Price</b></TableCell>
              <TableCell align="right"><b>Status</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {store.orders.map((order) => (
              <TableRow key={order.client}>
                <TableCell component="th" scope="row">
                  {order.client}
                </TableCell>
                <TableCell align="right">{order.foodList}</TableCell>
                <TableCell align="right">{order.price}</TableCell>
                <TableCell align="right">{order.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
