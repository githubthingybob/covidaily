import React from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  {id: 'date', label: 'Date', minWidth: 150 , align: 'center'},
  {id: 'oximeter', label: 'Oximeter (SpO2)', minWidth: 70, align: 'center' },
  {id: 'temperature', label: 'Temperature', minWidth: 70, align: 'center'},
  {id: 'bloodpressure', label: 'Blood Pressure (S/D)', minWidth: 100, align: 'center'},
  {id: 'treatment',label: 'Symptom(s)', minWidth: 170, align: 'center'},
  {id: 'treatment',label: 'Other Symptom(s)', minWidth: 170, align: 'center'},
  {id: 'treatment',label: 'Treatment(s)', minWidth: 170, align: 'center'},
  {id: 'treatment',label: 'Other Treatment(s)', minWidth: 170, align: 'center'},
  {id: 'treatment',label: 'Feelings', minWidth: 50, align: 'center'},
  {id: 'treatment',label: 'Reaction(s)', minWidth: 170, align: 'center'},
  {id: 'treatment',label: 'Other Reaction(s)', minWidth: 170, align: 'center'},
  {id: 'treatment',label: 'Edit', minWidth: 50, align: 'center'},
  {id: 'treatment',label: 'Delete', minWidth: 50, align: 'center'},
];





const useStyles = makeStyles({
  root: {
    width: '90%',
    marginTop: '180px',
    margin: 'auto'
  },
  container: {
    maxHeight: 700,
    
  },
});

function DataLogTest(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const rows = props.store.logsReducer
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default connect(mapStoreToProps)(DataLogTest);