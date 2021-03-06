import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 6,
    boxShadow: "0",
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}));

export default function CommodityTable() {

  const classes = useStyles();
  const store = useSelector(state => state);

  return (
    <div>
      <h3>Commodities</h3>
      <Divider />
      <br />
      <TableContainer component={Paper} elevation={5}>
        <Table stickyHeader className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
            <TableCell><b>ID</b></TableCell>  
              <TableCell align="right"><b>Commodity</b></TableCell>              
              <TableCell align="right"><b>Price</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {store.commodities.map((item) => (
              <TableRow key={item.id}>
                <TableCell component="th" scope="row">
                  {item.id}
                </TableCell>
                <TableCell align="right">{item.name}</TableCell>
                <TableCell align="right">{item.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
