import React from 'react';
import { makeStyles, Grid, Container,Paper } from '@material-ui/core';
import CustTable from './CustTable';
import clsx from 'clsx';
import Chart from './Chart';

const useStyles = makeStyles(theme => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflowX: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 240
  }
}));

export default function DashboardContent(){
  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>{<Chart/>}</Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>{/* <Deposits /> */}</Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <CustTable />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    )
}