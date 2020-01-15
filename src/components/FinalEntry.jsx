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
  Tabs
} from "@material-ui/core";
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import BikeTab from "./sub-components/final-entry/BikeTab";
import CarTab from "./sub-components/final-entry/CarTab";

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

export default function FinalEntry() {
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
                  <Tab
                    label="Car"
                    icon={<DriveEtaIcon />}
                    {...a11yProps(1)}
                  />
                  <Tab
                    label="Threewheel"
                    icon={<DriveEtaIcon/>}
                    {...a11yProps(2)}
                  />
                  <Tab
                    label="Bus"
                    icon={<DirectionsBusIcon />}
                    {...a11yProps(3)}
                  />
                  
                </Tabs>
              </AppBar>
              <TabPanel value={value} index={0}>
                <BikeTab/>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <CarTab/>
              </TabPanel>
              <TabPanel value={value} index={2}>
                Item Three
              </TabPanel>
              <TabPanel value={value} index={3}>
                Item Four
              </TabPanel>
              
            </div>
      </main>
    </React.Fragment>
  );
}
