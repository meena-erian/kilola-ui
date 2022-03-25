import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { Fragment } from 'react';
import AddFarmButton from './AddFarmButton';

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

export default function FarmsPanel(props) {
  const { farms } = props;
  if(!farms.length){
    return (
      <Fragment>
      <Title>Your Farms</Title>
      <p>You have not added any farms yet. Get started by using the button below to add a farm</p>
      </Fragment>
    )
  }
  return (
    <Fragment>
      <Title>Your Farms</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Size</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {farms.map((farm) => (
            <TableRow key={farm.id}>
              <TableCell>{farm.name}</TableCell>
              <TableCell>{farm.location}</TableCell>
              <TableCell>{farm.size}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <AddFarmButton />
    </Fragment>
  );
}