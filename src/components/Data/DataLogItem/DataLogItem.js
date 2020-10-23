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
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const columns = [
  {id: 'date', label: 'Date', minWidth: 150 , align: 'center', format:(value) => value.split('T')[0]},
  {id: 'oximeter', label: 'Oximeter (SpO2)', minWidth: 50, align: 'center' },
  {id: 'temperature', label: 'Temperature (°F)', minWidth: 50, align: 'center'},
  {id: 'blood_pressure', label: 'Blood Pressure (S/D)', minWidth: 20, align: 'center'},
  {id: 'symptoms',label: 'Symptoms', minWidth: 170, align: 'center'},
  {id: 'symptoms_not_listed',label: 'Other Symptoms', minWidth: 170, align: 'center'},
  {id: 'treatment',label: 'Treatments', minWidth: 170, align: 'center'},
  {id: 'treatment_not_listed',label: 'Other Treatments', minWidth: 170, align: 'center'},
  {id: 'feelings',label: 'Feelings', minWidth: 50, align: 'center'},
  {id: 'reactions',label: 'Reactions', minWidth: 170, align: 'center'},
  {id: 'reactions_not_listed',label: 'Other Reactions', minWidth: 170, align: 'center'}
];


const useStyles = makeStyles({
  root: {
    width: '95%',
    marginTop: '160px',
    margin: 'auto'
  },
  container: {
    maxHeight: 800,
  }
});

function DataLogTest(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const rows = props.store.logsReducer;
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
        <Table stickyHeader aria-label="data-logs">
          <TableHead>
            <TableRow>
              {columns.map((column,i) => (
                <TableCell
                  key={i}
                  align={column.align}
                  style={{ minWidth: column.minWidth, color: '#00ffc8', backgroundColor: '#3f3f3fe5', fontFamily: 'Poppins' }}
                >
                  {column.label}
                </TableCell>
              ))}
                <TableCell
                  align="center"
                  style={{ color: '#00ffc8', backgroundColor: '#3f3f3fe5', fontFamily: 'Poppins' }}
                >
                  Edit
                </TableCell>
                <TableCell
                  align="center"
                  style={{ color: '#00ffc8', backgroundColor: '#3f3f3fe5', fontFamily: 'Poppins' }}
                >
                  Delete
                </TableCell>
            </TableRow>
          </TableHead>
            <TableBody>
           {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, i) => {
             return (
               <TableRow tabIndex={-1} key={i}>
                 {columns.map((column,i) => {
                   const value = row[column.id];
                   return (
                     <TableCell key={i} align={column.align} style={{fontFamily: 'Raleway'}}>
                       {column.format && typeof value === 'number' ? column.format(value) : value}
                     </TableCell>
                   ); 
                 })}
                 <TableCell align="center" style={{minWidth:"30"}}>
                    <EditIcon/>
                 </TableCell>
                 <TableCell align="center" style={{minWidth:"30"}}>
                    <DeleteIcon/>
                 </TableCell>
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