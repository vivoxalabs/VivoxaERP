import React from "react";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { makeStyles, Grid, TextField } from "@material-ui/core";

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

const useStyles = makeStyles(theme => ({
  form: {
    minWidth: 50
  }
}));

export default function PersonalS1() {
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = React.useState(
    new Date()
  );

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6} lg={6}>
        <TextField
          required
          id="firstName"
          name="firstName"
          label="First Name"
          fullWidth
          autoComplete="fname"
        />
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <TextField
          required
          id="lastName"
          name="lastName"
          label="Last Name"
          fullWidth
          autoComplete="lname"
        />
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <TextField
          required
          id="address1"
          name="address1"
          label="Address Line 1"
          fullWidth
          autoComplete="address1"
        />
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <TextField
          required
          id="address2"
          name="address2"
          label="Address Line 2"
          fullWidth
          autoComplete="address2"
        />
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <TextField
          required
          id="city"
          name="city"
          label="City"
          fullWidth
          autoComplete="city"
        />
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <TextField
          required
          id="zip"
          name="zip"
          label="Zip"
          fullWidth
          autoComplete="city"
        />
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <TextField
          required
          id="contactNum"
          name="contactNum"
          label="Contact Number"
        />
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="dd/MM/yyyy"
            margin="normal"
            id="dob"
            label="Date of Birth"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date"
            }}
          />
        </MuiPickersUtilsProvider>
      </Grid>
    </Grid>
  );
}
