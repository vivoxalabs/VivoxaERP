import React from "react";
import {
  makeStyles,
  Typography,
  CssBaseline,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Button
} from "@material-ui/core";
import PersonalS1 from "./sub-components/pre-entry/PersonalS1";
import TypeS2 from "./sub-components/pre-entry/TypeS2";

//import { Button } from "react-bootstrap/lib/InputGroup";

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
  form: {
    minWidth: 50
  },
  stepper: {
    padding: theme.spacing(3, 0, 5)
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  }
}));
const steps = ["Personal Details", "Lisence Details", "Payment Details"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <PersonalS1 />;
    case 1:
      return <TypeS2/>;
    default:
      throw new Error("Unknown Step");
  }
}
export default function PreEntry() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Typography variant="h6" gutterBottom>
          Pre-Enter Customer Details
        </Typography>
        <Paper className={classes.paper}>
          <Stepper activeStep={activeStep} ClassName={classes.stepper}>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
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
                  Customer's Details Saved as Pending Customer
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleBack}
                    >
                      Back
                    </Button>
                  )}
                  <Button
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
