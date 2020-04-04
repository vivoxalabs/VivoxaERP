import React from "react";
import {
  makeStyles,
  Typography,
  CssBaseline,
  Stepper,
  Step,
  StepLabel,
  Paper,
} from "@material-ui/core";
import VehicleS2 from "./sub-components/final-entry/VehicleS2";
import PersonDetailsS1 from "./sub-components/final-entry/PersonDetailsS1";
import ConfirmSaveS3 from "./sub-components/final-entry/ConfirmSaveS3";

const useStyles = makeStyles((theme) => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(10),
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(3),
  },
  formControl: {
    margin: theme.spacing(3),
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    margin: 5,
  },
}));

const steps = ["Personal Details", "Licence Details", "Confirm & Save"];

export default function FinalEntry() {
  const classes = useStyles();

  const [activeStep, setActiveStep] = React.useState(0);
  const [formFields, setformFields] = React.useState({
    field1: "",
    field2: "",
    firstName: "",
    lastName: "",
    middleName: "",
    initialName: "",
    dateOfBirth: "",
    Nic: "",
    address1: "",
    address2: "",
    city: "",
    zip: "",
    gender: "",
    contact1: "",
    contact2: "",
  });

  const [vehicleForm, setVehicleForm] = React.useState();

  const handleVehicleForm = (newValues) => {
    setVehicleForm(newValues);
  };
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  React.useEffect(() => {
    console.log(vehicleForm);
  });

  const handleDataSave = () => {};
  function getStep(step) {
    switch (step) {
      case 0:
        return (
          <PersonDetailsS1
            activeStep={activeStep}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        );
      case 1:
        return (
          <VehicleS2
            handleVehicleForm={handleVehicleForm}
            activeStep={activeStep}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        );
      case 2:
        return (
          <ConfirmSaveS3
            {...formFields}
            activeStep={activeStep}
            handleNext={handleNext}
            handleBack={handleBack}
            handleDataSave={handleDataSave}
          />
        );
      default:
        throw new Error("Invalid step");
    }
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Typography variant="h5" gutterBottom>
          Customer Details Entry
        </Typography>
        <Paper className={classes.paper}>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((lable) => (
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
                {/* <div className={classes.buttons}>
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
                </div> */}
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}
