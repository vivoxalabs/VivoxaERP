import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";

//Generate Row Data
function createTableData(id, custName, enterDate, type, payment) {
  return { id, custName, enterDate, type, payment };
}

const rows = [
  createTableData(0, "Hirantha Peiris", "19-05-2019", "AAB", 5000),
  createTableData(0, "Hirantha Peiris", "19-05-2019", "AAB", 5000),
  createTableData(0, "Hirantha Peiris", "19-05-2019", "AAB", 5000),
  createTableData(0, "Hirantha Peiris", "19-05-2019", "AAB", 5000),
  createTableData(0, "Hirantha Peiris", "19-05-2019", "AAB", 5000),
  createTableData(0, "Gimantha Perera", "19-05-2019", "AA", 5200)
];

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14,
    padding:10
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow);

const useStyles = makeStyles(theme => ({
  root: {
    width: "auto",
    overflow: "auto"
  },
  seeMore: {
    marginTop: theme.spacing(2)
  }
}));

export default function CustTable() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom>
        Pending Customers
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Enter Date</StyledTableCell>
            <StyledTableCell align="right">Type</StyledTableCell>
            <StyledTableCell align="right">Payment</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row =>(
            <StyledTableRow key={row.id}>
              <StyledTableCell >{row.id}</StyledTableCell>
              <StyledTableCell align="right">{row.custName}</StyledTableCell>
              <StyledTableCell align="right">{row.enterDate}</StyledTableCell>
              <StyledTableCell align="right">{row.type}</StyledTableCell>
              <StyledTableCell align="right">{row.payment}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="">
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}
