import React, { Suspense } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import daveyImage from '../assets/img/davey.jpg';

const iconStyle = {
  fontSize: '40px',           // Makes the icons larger
  textShadow: '2px 2px 8px rgba(0, 0, 0, 0.3)', // Adds depth and shadow for a 3D effect
  transition: 'transform 0.2s ease', // Smooth hover effect
};


function About() {
  
  return (
    <Box component="section" id="about" sx={{ display: 'flex', pt: 4, mb: 4, justifyContent: 'space-between', backgroundColor: "#fff" }}>
      {/* Left side content */}
      <Box sx={{ width: '33%' }}>
        <img src={daveyImage} alt="Davey" style={{ height:"420px"}} />
      </Box>


      {/* Right side for 3D model */}
      <Box sx={{ width: '66%', paddingRight: 3 }}>
        <Typography variant="h1" component="h1" sx={{ mb: 3 }}>
          Software Engineer 
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
          <i className="fab fa-react" title="React.js" style={iconStyle}></i>
          <i className="fab fa-node-js" title="Node.js" style={iconStyle}></i>
          <i className="fab fa-git" title="Git & Github" style={iconStyle}></i>
          <i className="fab fa-docker" title="Docker" style={iconStyle}></i>
          <i className="fab fa-aws" title="AWS" style={iconStyle}></i>
          <i className="fab fa-html5" title="HTML 5" style={iconStyle}></i>
          <i className="fab fa-css3-alt" title="CSS3" style={iconStyle}></i>
          <i className="fab fa-js-square" title="JavaScript" style={iconStyle}></i>
          <i className="fab fa-php" title="PHP" style={iconStyle}></i>
          <i className="fab fa-python" title="Python" style={iconStyle}></i>
          <i className="fas fa-gem" title="Ruby" style={iconStyle}></i>
        </Box>
      </Box>
    </Box>
  );
}

export default About;