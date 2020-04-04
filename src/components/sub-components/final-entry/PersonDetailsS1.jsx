import React from "react";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  CssBaseline,
  Typography,
  Grid,
  TextField,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  makeStyles,
  Button
} from "@material-ui/core";

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

const useStyles = makeStyles(theme => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2)
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(3)
  },
  formControl: {
    margin: theme.spacing(3)
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    margin: 5
  }
}));

export default function PersonDetailsS1(props) {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [genderValue, setGenderValue] = React.useState("null");

  const {activeStep, handleNext, handleBack } = props;

  // useEffect(() => {
  //   console.log("value =  " + values);
  // });

  const steps = 3;

  const handleGenderChange = event => {
    setGenderValue(event.target.value);
  };

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const handleName = () => {};

  return (
    <React.Fragment>
      <CssBaseline />
      <Typography variant="h5">Personal Details</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} lg={4}>
          <TextField
            required
            id="fname"
            name="fname"
            label="First Name"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <TextField
            required
            id="lname"
            name="lname"
            label="Last Name"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <TextField
            id="midname"
            name="midName"
            label="Middle Name"
            fullWidth
          />
        </Grid>

        <Grid item xs={12} md={8} lg={8}>
          <TextField
            required
            id="initialName"
            name="initialName"
            label="Name with Initials"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
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
        <Grid item xs={12} md={8} lg={8}>
          <TextField
            required
            id="nic"
            name="nic/pass"
            label="NIC/Passport Number"
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
            id="zip"
            name="zip"
            label="Zip"
            fullWidth
            autoComplete="city"
          />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender"
              value={genderValue}
              onChange={handleGenderChange}
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <TextField
            required
            id="contact1"
            name="contact1"
            label="Contact Number 1"
          />
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <TextField id="contact2" name="contact2" label="Contact Number 2" />
        </Grid>
      </Grid>
      <div className={classes.buttons}>
        {activeStep !== 0 && (
          <Button
            className={classes.button}
            variant="outlined"
            color="primary"
            onClick={handleBack}
          >
            Back
          </Button>
        )}
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={handleNext}
        >
          {activeStep === steps.length - 1 ? "Save" : "Next"}
        </Button>
      </div>
    </React.Fragment>
  );
}
