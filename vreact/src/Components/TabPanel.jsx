import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';

import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import About from './About/About';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ minHeight: '93.2vh', maxHeight: '90vh', bgcolor: "rgba(255, 255, 255, 0.42)" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ 
      bgcolor: 'whitesmoke', 
      width: 1,
      boxShadow: 5,
      minHeight: '100vh'
      }}>
      <AppBar position="static" sx={{ backgroundColor: '  #900C3F  ', boxShadow: 0, }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="inherit"
          variant="fullWidth"
          aria-label="daveymason.com layout"
          centered
          sx ={{ borderRadius: 1}}
        >
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="Experience" {...a11yProps(1)} />
          <Tab label="Education" {...a11yProps(2)} />
          <Tab label="Code" {...a11yProps(3)} />
          <Tab label="Websites" {...a11yProps(4)} />
          <Tab label="Contact" {...a11yProps(5)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <About />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Experience
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Education
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          Code
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          Websites
        </TabPanel>
        <TabPanel value={value} index={5} dir={theme.direction}>
          Contact
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
