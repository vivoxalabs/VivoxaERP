import React from "react";
import { makeStyles, Grid, TextField } from "@material-ui/core";

const useStyles = makeStyles(theme => ({}));
export default function TypeS2() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6} lg={6}>
        <TextField
          required
          id="licenceType"
          name="licence"
          label="Licence Type"
          fullWidth
          autoComplete="none"
        />
      </Grid>
    </Grid>
  );
}
