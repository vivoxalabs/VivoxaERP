import React from "react";
import {
  makeStyles,
  Grid,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  selTrainType: {
    width: 200
  }
}));

export default function TypeS2() {
  const classes = useStyles();

  const [licenseType, setLicenseType] = React.useState("");
  const [vehClass, setVehClass] = React.useState("");
  const [vehType, setVehType] = React.useState("");
  const [trainType, setTrainType] = React.useState("");

  //const inputLabel = React.useRef(null);

  //const [labelWidth,setLabelWidth] = React.useState(0);

  // React.useEffect(()=>{
  //   setLabelWidth(5);
  // },[]);

  const handleLicenseTyChange = event => {
    setLicenseType(event.target.value);
  };
  const handleVehicalClassChange = event => {
    setVehClass(event.target.value);
  };
  const handleVehicalTypeChange = event => {
    setVehType(event.target.value);
  };
  const handleTrainTypeChange = event => {
    setTrainType(event.target.value);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6} lg={6}>
        <FormControl className={classes.formControl}>
          <InputLabel id="licenseType">License Type</InputLabel>
          <Select
            labelId="licenseType"
            id="selLicenseTy"
            value={licenseType}
            onChange={handleLicenseTyChange}
          >
            <MenuItem value={"new"}>New</MenuItem>
            <MenuItem value={"extend"}>Extend</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <FormControl className={classes.formControl}>
          <InputLabel id="vehClass">Vehicle Class</InputLabel>
          <Select
            labelId="vehClass"
            id="selVehClass"
            value={vehClass}
            onChange={handleVehicalClassChange}
          >
            <MenuItem value={"A"}>A</MenuItem>
            <MenuItem value={"A1"}>A1</MenuItem>
            <MenuItem value={"B"}>B</MenuItem>
            <MenuItem value={"B1"}>B1</MenuItem>
            <MenuItem value={"D"}>D</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <FormControl className={classes.formControl}>
          <InputLabel id="vehType">Vehicle Type </InputLabel>
          <Select
            labelId="vehType"
            id="selVehType"
            value={vehType}
            onChange={handleVehicalTypeChange}
          >
            <MenuItem value={"Auto"}>Auto</MenuItem>
            <MenuItem value={"Manual"}>Manual</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <FormControl className={classes.formControl}>
          <InputLabel id="trainType">Trainning Type</InputLabel>
          <Select
            className={classes.selTrainType}
            labelId="trainType"
            id="selTrainType"
            value={trainType}
            onChange={handleTrainTypeChange}
          >
            <MenuItem value={1}>With Trainning</MenuItem>
            <MenuItem value={0}>Without Trainning</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
}
