import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <Box component="section" id="contact" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h2" sx={{ mb: 5 }}>
        <FontAwesomeIcon icon={faEnvelope} className="styledIcon" /> Contact
      </Typography>
      <Typography variant="body1">
        You can reach me at: <a href="mailto:daveymason@outlook.com"> daveymason@outlook.com</a>
      </Typography>
    </Box>
  );
};

export default Contact;