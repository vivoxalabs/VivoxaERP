import React from "react";
import {
  makeStyles,
  Grid,
  TextField,
  Checkbox,
  FormControlLabel
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3)
  }
}));

export default function PaymentS3() {
  const classes = useStyles();
  const [isaAdvPay, setIsaAdvPay] = React.useState(0);

  const handlePaySelect = event => {
    setIsaAdvPay(event.target.checked);
  };
  
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6} lg={6}>
        <TextField
          required
          id="fee"
          name="courseFee"
          label="Proposed Course Fee"
        />
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <FormControlLabel
          control={
            <Checkbox onChange={handlePaySelect} value="checkedPayAdvance" />
          }
          label="Make Advance Payment Later"
        />
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <TextField id="adPayment" name="adPay" label="Advance Payment (RS)" />
      </Grid>
    </Grid>
  );
}
