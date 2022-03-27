import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import AddBatchButton from './AddBatchButton';
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

export default function BatchesPanel(props) {
  const { batches, farms } = props;
  if (!batches.length) {
    return (
      <Fragment>
        <Title>Your Batches</Title>
        <p>You have not yet added any batch. Use the button below to add a batch</p>
        <AddBatchButton farms={farms} />
      </Fragment>
    )
  }
  return (
    <Fragment>
      <Title>Your Batches</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Crop</TableCell>
            <TableCell>Farm</TableCell>
            <TableCell>Area</TableCell>
            <TableCell>Weight</TableCell>
            <TableCell>Planting Date</TableCell>
            <TableCell>Harvesting Date</TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {batches.map((batch) => (
            <TableRow key={batch.id}>
              <TableCell>{batch.crop}</TableCell>
              <TableCell>{batch.farm}</TableCell>
              <TableCell>{batch.area}</TableCell>
              <TableCell>{batch.weight}</TableCell>
              <TableCell>{batch.planting_date}</TableCell>
              <TableCell>{batch.harvesting_date}</TableCell>
              <TableCell>{batch.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <AddBatchButton farms={farms}/>
    </Fragment>
  );
}