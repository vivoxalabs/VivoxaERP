import React from "react";
import {
  makeStyles,
  Typography,
  CssBaseline,
  Stepper,
  Step,
  StepLabel,
  Paper,
  Button
} from "@material-ui/core";
import VehicleS2 from "./sub-components/final-entry/VehicleS2";
import PersonDetailsS1 from "./sub-components/final-entry/PersonDetailsS1";
import ConfirmSaveS3 from "./sub-components/final-entry/ConfirmSaveS3";

const useStyles = makeStyles(theme => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(10)
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(3)
  },
  formControl: {
    margin: theme.spacing(3)
  },
  stepper: {
    padding: theme.spacing(3, 0, 5)
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    margin: 5
  }
}));

const steps = ["Personal Details", "Licence Details", "Confirm & Save"];

function getStep(step) {
  switch (step) {
    case 0:
      return <PersonDetailsS1 />;
    case 1:
      return <VehicleS2 />;
    case 2:
      return <ConfirmSaveS3 />;
    default:
      throw new Error("Invalid step");
  }
}
export default function FinalEntry() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Typography variant="h5" gutterBottom>
          Customer Details Entry
        </Typography>
        <Paper className={classes.paper}>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map(lable => (
              <Step key={lable}>
                <StepLabel>{lable}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h4" gutterBottom>
                  Success
                </Typography>
                <Typography variant="subtitle2">
                  Customer Details Successfully Saved
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStep(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button
                      className={classes.button}
                      variant="contained"
                      color="primary"
                      onClick={handleBack}
                    >
                      Back
                    </Button>
                  )}
                  <Button
                    className={classes.button}
                    varient="contained"
                    color="primary"
                    onClick={handleNext}
                  >
                    Next
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}
