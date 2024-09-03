import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

function About() {
  return (
    <Box component="section" id="about" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 3, height: '30px' }}>
          "Creative Technologist", "HCI Specialist", "Full-Stack Developer"
        </Typography>
      </Box>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Integrates a Lean UX approach with Agile & DevOps methodologies to rapidly research, design, and develop high-quality, functional solutions that are user-centric, secure, and scalable.
        </Typography>
        <Divider sx={{ my: 4 }} />
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h6" component="p" sx={{ mb: 2 }}>
            Technical Skills:
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2 }}>
            <i className="fab fa-figma" title="Figma"></i>
            <i className="fab fa-react" title="React.js"></i>
            <i className="fab fa-node-js" title="Node.js"></i>
            <i className="fab fa-git" title="Git & Github"></i>
            <i className="fab fa-docker" title="Docker"></i>
            <i className="fab fa-aws" title="AWS"></i>
            <i className="fab fa-html5" title="HTML 5"></i>
            <i className="fab fa-css3-alt" title="CSS3"></i>
            <i className="fab fa-js-square" title="JavaScript"></i>
            <i className="fab fa-php" title="PHP"></i>
            <i className="fab fa-python" title="Python"></i>
            <i className="fas fa-gem" title="Ruby"></i>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default About;
