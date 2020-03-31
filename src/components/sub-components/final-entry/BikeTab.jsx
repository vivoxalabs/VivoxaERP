import React from "react";
import {
  CssBaseline,
  Typography,
  makeStyles,
  Paper,
  Grid,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  FormControl,
  Radio,
  Button,
  FormLabel
} from "@material-ui/core";
import { useEffect } from "react";

const useStyles = makeStyles(theme => ({
  paper: {
    marginBottom: theme.spacing(5),
    padding: theme.spacing(3)
  },
  formControl: {
    margin: theme.spacing(3)
  }
}));

export default function BikeTab(props) {
  const classes = useStyles();

  const [isInclude, setIsInclude] = React.useState(false);
  const [A1Only, setA1Only] = React.useState(false);
  const [trainType, setTrainType] = React.useState("with");
  
  const handleTrainTypeChange = event => {
    setTrainType(event.target.value);
  };
  const handleIsInclude = event => {
    setIsInclude(event.target.checked);
  };

  const handleA1Only = event => {
    setA1Only(event.target.checked);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Typography variant="h5">Motorbike</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={12}>
            <FormControlLabel
              control={
                <Checkbox onChange={handleIsInclude} value="isInlcude" />
              }
              label="Include"
            />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <FormControlLabel
              control={
                <Checkbox
                  disabled={!isInclude}
                  onChange={handleA1Only}
                  value="A1Oonly"
                />
              }
              label="A1 only - Scooter"
            />
          </Grid>
          <Grid item xs={12} md={2} lg={2}>
            <FormLabel component="legend">Training Type</FormLabel>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <FormControl component="fieldset" className={classes.formControl}>
              <RadioGroup
                aria-label="license-type"
                name="lincese-type"
                value={trainType}
                onChange={handleTrainTypeChange}
              >
                <FormControlLabel
                  disabled={!isInclude}
                  value="with"
                  control={<Radio />}
                  label="With Training"
                />
                <FormControlLabel
                  disabled={!isInclude}
                  value="without"
                  control={<Radio />}
                  label="Without Training"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.btnSave}
              onClick={() => {
                console.log("btnClicked");
              }}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </React.Fragment>
  );
}
