import React, { Suspense } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import daveyImage from '../assets/img/davey.jpg';

const iconStyle = {
  fontSize: '40px',          
  textShadow: '2px 2px 8px rgba(0, 0, 0, 0.3)', 
  transition: 'transform 0.2s ease', 
};

const imageStyle = {
  height: '320px',
  borderRadius: '50%', 
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
  objectFit: 'cover',   // rying out object-fit: cover; to see if it helps with the image distortion
};

function About() {
  
  return (
    <Box component="section" id="about" sx={{ display: 'flex', pt: 5, mb: 5, justifyContent: 'space-between' }}>
      {/* Left side content */}
      <Box sx={{ width: '33%' }}>
        <img src={daveyImage} alt="Davey" style={imageStyle} className='styledProfile' />
      </Box>

      {/* Right side for 3D model */}
      <Box sx={{ width: '66%', paddingRight: 3 }}>
        <Card sx={{ p: 3, height: '100%' }}>
        <Typography variant="h1" component="h1" sx={{ mb: 3 }}>
          React Developer | UX Engineer  
        </Typography>

        <Typography variant="h6" sx={{ mb: 1 }}>
          Experienced software engineer with a focus on UX, Cybersecurity and AI.
        </Typography>

        <Typography variant="body1" sx={{ mb: 3 }}>
          Integrates a Lean UX approach with Agile & DevOps methodologies to rapidly research, design, and develop high-quality, functional solutions that are user-centric, secure, and scalable.
        </Typography>

        <Typography variant="h6" component="p" sx={{ mb: 2, mt:5 }}>
          Technical Skills:
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          <i className="fab fa-figma" title="Figma" style={iconStyle}></i>
          <i className="fab fa-html5" title="HTML 5" style={iconStyle}></i>
          <i className="fab fa-css3-alt" title="CSS3" style={iconStyle}></i>
          <i className="fab fa-react" title="React.js" style={iconStyle}></i>
          <i className="fab fa-js-square" title="JavaScript" style={iconStyle}></i>
          <i className="fab fa-php" title="PHP" style={iconStyle}></i>
          <i className="fab fa-python" title="Python" style={iconStyle}></i>
          <i className="fas fa-gem" title="Ruby" style={iconStyle}></i>
          <i className="fab fa-node-js" title="Node.js" style={iconStyle}></i>
          <i className="fab fa-git" title="Git & Github" style={iconStyle}></i>
          <i className="fab fa-docker" title="Docker" style={iconStyle}></i>
          <i className="fab fa-aws" title="AWS" style={iconStyle}></i>
        </Box>
        </Card>
      </Box>
    </Box>
  );
}

export default About;