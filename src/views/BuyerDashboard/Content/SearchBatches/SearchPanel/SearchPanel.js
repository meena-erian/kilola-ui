import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
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

export default function SearchPanel(props) {
  const { batches } = props;
  if (!batches.length) {
    return (
      <Fragment>
        <Title>Batches</Title>
        <p>Seems like no batches are registered in the system yet</p>
      </Fragment>
    )
  }
  return (
    <Fragment>
      <Title>Batches</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Crop</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {batches.map((batch) => (
            <TableRow key={batch.id}>
              <TableCell>{batch.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Fragment>
  );
}