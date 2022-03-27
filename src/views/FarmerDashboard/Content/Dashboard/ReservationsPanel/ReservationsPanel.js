import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
//import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { Fragment } from 'react';

function Title(props) {
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {props.children}
    </Typography>
  );
}

Title.propTypes = {
  children: PropTypes.node,
};

export default function ReservationsPanel() {
  return (
    <Fragment>
      <Title>Reservation Requests</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
          </TableRow>
        </TableHead>
        <TableBody>
        </TableBody>
      </Table>
    </Fragment>
  );
}