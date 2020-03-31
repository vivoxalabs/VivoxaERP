import React from "react";
import PropTypes from "prop-types";
import {
  makeStyles,
  Grid,
  Typography,
  CssBaseline,
  Paper,
  FormControl,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Radio,
  Box,
  Tab,
  AppBar,
  Tabs,
  Checkbox,
  Button
} from "@material-ui/core";
import MotorcycleIcon from "@material-ui/icons/Motorcycle";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import DirectionsBusIcon from "@material-ui/icons/DirectionsBus";
// import BikeTab from "./BikeTab";
// import CarTab from "./CarTab";
// import ThreewheelTab from "./ThreewheelTab";
// import BusTab from "./BusTab";

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
  }
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`
  };
}

export default function VehicleS2() {
  const classes = useStyles();
  const [typeValue, setTypeValue] = React.useState("new");

  const handleTypeChange = event => {
    setTypeValue(event.target.value);
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={6}>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">License Type</FormLabel>
                <RadioGroup
                  aria-label="license-type"
                  name="lincese-type"
                  value={typeValue}
                  onChange={handleTypeChange}
                >
                  <FormControlLabel
                    value="new"
                    control={<Radio />}
                    label="New"
                  />
                  <FormControlLabel
                    value="extend"
                    control={<Radio />}
                    label="Extend"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </Paper>
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="on"
              indicatorColor="primary"
              textColor="primary"
              aria-label="scrollable force tabs example"
            >
              <Tab
                label="Motorbike"
                icon={<MotorcycleIcon />}
                {...a11yProps(0)}
              />
              <Tab label="Car" icon={<DriveEtaIcon />} {...a11yProps(1)} />
              <Tab
                label="Threewheel"
                icon={<DriveEtaIcon />}
                {...a11yProps(2)}
              />
              <Tab label="Bus" icon={<DirectionsBusIcon />} {...a11yProps(3)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            {/* <BikeTab var={isBike}/> */}
            {/* //Bike Tab Fragment */}
            {GetBikeTab()}
          </TabPanel>
          <TabPanel value={value} index={1}>
            {GetCarTab()}
          </TabPanel>
          <TabPanel value={value} index={2}>
            {GetThreewheelTab()}
          </TabPanel>
          <TabPanel value={value} index={3}>
            {GetBusTab()}
          </TabPanel>
        </div>
      </main>
    </React.Fragment>
  );
}

function GetBikeTab() {
  // MotorBike
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
                <Checkbox
                  onChange={handleIsInclude}
                  value="isInlcude"
                  checked={isInclude}
                />
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
                  checked={A1Only}
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

function GetCarTab() {
  const classes = useStyles();

  const [isInclude, setIsInclude] = React.useState(false);
  const [licenseType, setLicenseType] = React.useState("Manual");
  const [trainType, setTrainType] = React.useState("with");

  const handleTrainTypeChange = event => {
    setTrainType(event.target.value);
  };
  const handleIsInclude = event => {
    setIsInclude(event.target.checked);
  };

  const handleLicenseTypeChange = event => {
    setLicenseType(event.target.value);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Typography variant="h5">Car / Light Vehicle</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={12}>
            <FormControlLabel
              control={
                <Checkbox
                  onChange={handleIsInclude}
                  value="isInlcude"
                  checked={isInclude}
                />
              }
              label="Include"
            />
          </Grid>
          <Grid item xs={12} md={2} lg={2}>
            <FormLabel component="legend">Vehicle License Type</FormLabel>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <FormControl component="fieldset" className={classes.formControl}>
              <RadioGroup
                aria-label="license-type"
                name="lincese-type"
                value={licenseType}
                onChange={handleLicenseTypeChange}
              >
                <FormControlLabel
                  disabled={!isInclude}
                  value="Manual"
                  control={<Radio />}
                  label="Manual Vehicle"
                />
                <FormControlLabel
                  disabled={!isInclude}
                  value="Auto"
                  control={<Radio />}
                  label="Auto Vehicle"
                />
              </RadioGroup>
            </FormControl>
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

function GetThreewheelTab() {
  const classes = useStyles();

  const [isInclude, setIsInclude] = React.useState(false);
  const [trainType, setTrainType] = React.useState("with");

  const handleTrainTypeChange = event => {
    setTrainType(event.target.value);
  };
  const handleIsInclude = event => {
    setIsInclude(event.target.checked);
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Typography variant="h5">Threewheel</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={12}>
            <FormControlLabel
              control={
                <Checkbox
                  onChange={handleIsInclude}
                  value="isInlcude"
                  checked={isInclude}
                />
              }
              label="Include"
            />
          </Grid>

          <Grid item xs={12} md={2} lg={2}>
            <FormLabel component="legend">Training Type</FormLabel>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <FormControl component="fieldset" className={classes.formControl}>
              <RadioGroup
                aria-label="train-type"
                name="train-type"
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

function GetBusTab() {
  const classes = useStyles();

  const [isInclude, setIsInclude] = React.useState(false);
  const [trainType, setTrainType] = React.useState("with");

  const handleTrainTypeChange = event => {
    setTrainType(event.target.value);
  };
  const handleIsInclude = event => {
    setIsInclude(event.target.checked);
    console.log(isInclude);
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Typography variant="h5">Heavy vehicle / Bus</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={12}>
            <FormControlLabel
              control={
                <Checkbox
                  onChange={handleIsInclude}
                  value="isInlcude"
                  checked={isInclude}
                />
              }
              label="Include"
            />
          </Grid>

          <Grid item xs={12} md={2} lg={2}>
            <FormLabel component="legend">Training Type</FormLabel>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <FormControl component="fieldset" className={classes.formControl}>
              <RadioGroup
                aria-label="train-type"
                name="train-type"
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
