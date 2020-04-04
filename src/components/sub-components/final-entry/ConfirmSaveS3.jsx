import React from 'react';
import { Typography,Button,makeStyles } from '@material-ui/core';

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
export default function ConfirmSaveS3(props){
    const {values,field1,field2, activeStep ,handleNext,handleBack} = props;
    const classes = useStyles();
    const steps = 3;

    return(
        <React.Fragment>
            <Typography variant='subtitle1' gutterBottom>
                Confirm and Save
            </Typography>
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
          {activeStep === steps - 1 ? "Save" : "Next"}
        </Button>
      </div>
        </React.Fragment>
    )
}