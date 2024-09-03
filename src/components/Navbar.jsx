import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function Navbar() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Davey Mason
        </Typography>
        <Box>
          <Button color="inherit" href="#about">About</Button>
          <Button color="inherit" href="#code">Projects</Button>
          <Button color="inherit" href="#experience">Experience</Button>
          <Button color="inherit" href="#education">Education</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
