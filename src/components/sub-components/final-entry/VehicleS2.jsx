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
  Button,
} from "@material-ui/core";
import MotorcycleIcon from "@material-ui/icons/Motorcycle";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import DirectionsBusIcon from "@material-ui/icons/DirectionsBus";
// import BikeTab from "./BikeTab";
// import CarTab from "./CarTab";
// import ThreewheelTab from "./ThreewheelTab";
// import BusTab from "./BusTab";

const useStyles = makeStyles((theme) => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(3),
  },
  formControl: {
    margin: theme.spacing(3),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    margin: 5,
  },
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
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

export default function VehicleS2(props) {
  const classes = useStyles();
  const [typeValue, setTypeValue] = React.useState("new");

  const handleTypeChange = (event) => {
    setTypeValue(event.target.value);
  };
  const { handleVehicleForm, activeStep, handleNext, handleBack } = props;

  const steps = 3;
  //Tab consts=>
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  //

  //All vehicle Form data =>
  const [formData, setFormData] = React.useState([]);

  var handleFormData = (data, obj) => {
    switch (obj) {
      case "bike":
        setFormData((formData) => [...formData, { bike: data }]);
        break;
      case "car":
        setFormData((formData) => [...formData, { lightVehicle: data }]);
        break;
      case "ThreeW":
        setFormData((formData) => [...formData, { threeW: data }]);
        break;
      case "bus":
        setFormData((formData) => [...formData, { bus: data }]);
        break;
      default:
        throw new console.error("vehical data switch error");
    }
  };

  React.useEffect(() => {
    //console.log(formData);
    handleVehicleForm(formData);
  });

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
            {GetBikeTab(handleFormData)}
          </TabPanel>
          <TabPanel value={value} index={1}>
            {GetCarTab(handleFormData)}
          </TabPanel>
          <TabPanel value={value} index={2}>
            {GetThreewheelTab(handleFormData)}
          </TabPanel>
          <TabPanel value={value} index={3}>
            {GetBusTab(handleFormData)}
          </TabPanel>
        </div>
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
      </main>
    </React.Fragment>
  );
}

function GetBikeTab(handleFormData) {
  // MotorBike
  const classes = useStyles();
  const [isInclude, setIsInclude] = React.useState(false);
  const [A1Only, setA1Only] = React.useState(false);
  const [trainType, setTrainType] = React.useState("with");

  const handleTrainTypeChange = (event) => {
    setTrainType(event.target.value);
  };
  const handleIsInclude = (event) => {
    setIsInclude(event.target.checked);
  };

  const handleA1Only = (event) => {
    setA1Only(event.target.checked);
  };

  const [formBike, setFormBike] = React.useState({
    A1: "",
    trainType: "",
  });

  React.useEffect(() => {
    //console.log(formBike);
    //handleFormData(formBike);
  });

  const handleData = (data) => {
    //setFormBike({ ...formBike, A1: A1Only });
    //setFormBike({ trainType:{...formBike,trainType:trainType}});
    handleFormData({ ...formBike, ...data }, "bike");
    //handleFormData(formBike);
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
                handleData({
                  A1: A1Only,
                  trainType: trainType,
                });
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

function GetCarTab(handleFormData) {
  const classes = useStyles();

  const [isInclude, setIsInclude] = React.useState(false);
  const [licenseType, setLicenseType] = React.useState("Manual");
  const [trainType, setTrainType] = React.useState("with");

  const handleTrainTypeChange = (event) => {
    setTrainType(event.target.value);
  };
  const handleIsInclude = (event) => {
    setIsInclude(event.target.checked);
  };
  const handleLicenseTypeChange = (event) => {
    setLicenseType(event.target.value);
  };

  const [carForm, setCarForm] = React.useState({
    vLicenseType: "",
    trainType: "",
  });

  const handleDataSave = (data) => {
    handleFormData({ ...carForm, ...data }, "car");
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
                handleDataSave({
                  vLicenseType: licenseType,
                  trainType: trainType,
                });
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

function GetThreewheelTab(handleFormData) {
  const classes = useStyles();

  const [isInclude, setIsInclude] = React.useState(false);
  const [trainType, setTrainType] = React.useState("with");

  //Three Wheel data
  const [threeWheelForm, setThreeWheelForm] = React.useState({
    trainType: "",
  });

  const handleDataSave = (data) => {
    handleFormData({ ...threeWheelForm, ...data }, "ThreeW");
  };
  const handleTrainTypeChange = (event) => {
    setTrainType(event.target.value);
  };
  const handleIsInclude = (event) => {
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
                handleDataSave({
                  trainType: trainType,
                });
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

function GetBusTab(handleFormData) {
  const classes = useStyles();

  const [isInclude, setIsInclude] = React.useState(false);
  const [trainType, setTrainType] = React.useState("with");

  const handleTrainTypeChange = (event) => {
    setTrainType(event.target.value);
  };
  const handleIsInclude = (event) => {
    setIsInclude(event.target.checked);
    //console.log(isInclude);
  };

  const [busForm, setBusForm] = React.useState({
    trainType: "",
  });

  const handleDataSave = (data) => {
    handleFormData({ ...busForm, ...data }, "bus");
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
                handleDataSave({
                  trainType: trainType,
                });
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
