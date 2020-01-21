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
import PhoneIcon from "@material-ui/icons/Phone";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import HelpIcon from "@material-ui/icons/Help";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import ThumbDown from "@material-ui/icons/ThumbDown";
import ThumbUp from "@material-ui/icons/ThumbUp";

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
//   const [value, setValue] = React.useState("female");

//   const handleChange = event => {
//     setValue(event.target.value);
//   };
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
                  value={value}
                  onChange={handleChange}
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
                    label="Item One"
                    icon={<PhoneIcon />}
                    {...a11yProps(0)}
                  />
                  <Tab
                    label="Item Two"
                    icon={<FavoriteIcon />}
                    {...a11yProps(1)}
                  />
                  <Tab
                    label="Item Three"
                    icon={<PersonPinIcon />}
                    {...a11yProps(2)}
                  />
                  <Tab
                    label="Item Four"
                    icon={<HelpIcon />}
                    {...a11yProps(3)}
                  />
                  <Tab
                    label="Item Five"
                    icon={<ShoppingBasket />}
                    {...a11yProps(4)}
                  />
                  <Tab
                    label="Item Six"
                    icon={<ThumbDown />}
                    {...a11yProps(5)}
                  />
                  <Tab
                    label="Item Seven"
                    icon={<ThumbUp />}
                    {...a11yProps(6)}
                  />
                </Tabs>
              </AppBar>
              <TabPanel value={value} index={0}>
                Item One
              </TabPanel>
              <TabPanel value={value} index={1}>
                Item Two
              </TabPanel>
              <TabPanel value={value} index={2}>
                Item Three
              </TabPanel>
              <TabPanel value={value} index={3}>
                Item Four
              </TabPanel>
              <TabPanel value={value} index={4}>
                Item Five
              </TabPanel>
              <TabPanel value={value} index={5}>
                Item Six
              </TabPanel>
              <TabPanel value={value} index={6}>
                Item Seven
              </TabPanel>
            </div>
      </main>
    </React.Fragment>
  );
}
