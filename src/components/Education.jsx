import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

function Education() {
  return (
    <Box component="section" id="education" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h2" sx={{ mb: 3 }}>
        <FontAwesomeIcon icon={faGraduationCap} className="styledIcon" /> Education
      </Typography>

      {/* Education Entries */}
      <Grid container spacing={4} sx={{ mb: 3 }}>
        <Grid item xs={12} md={8}>
          <Typography variant="h6">
            Georgia Institute of Technology 
            <Typography component="span" sx={{ color: 'text.secondary', fontSize: '0.9em' }}>
              {' | M.Sc. Computer Science '}
            </Typography>
          </Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            Part-time specializing in <b>Human Computer Interaction</b>, with classes in Game Design, Educational Technology, and Design. For SEO purposes, built projects in <b>C#, React, Javascript & Php</b>.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} sx={{ textAlign: 'right' }}>
          <Typography variant="body2" sx={{ color: 'primary.main' }}>
            September 2022 - Current
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={4} sx={{ mb: 3 }}>
        <Grid item xs={12} md={8}>
          <Typography variant="h6">
            Dublin Institute of Technology
            <Typography component="span" sx={{ color: 'text.secondary', fontSize: '0.9em' }}>
              {' | B.Sc. Digital Technology & Design'}
            </Typography>
          </Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            Intense 12-month degree covering <b>HTML, CSS, Javascript, Php, SQL, jQuery, Bootstrap, Codeigniter, Wordpress, Angular, Phonegap</b>, as well as <b>UX/UI & Concept Design</b>.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} sx={{ textAlign: 'right' }}>
          <Typography variant="body2" sx={{ color: 'primary.main' }}>
            March 2018 - March 2019
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={4} sx={{ mb: 3 }}>
        <Grid item xs={12} md={8}>
          <Typography variant="h6">
            Cork Institute of Technology
            <Typography component="span" sx={{ color: 'text.secondary', fontSize: '0.9em' }}>
              {' | B.Sc. Applied Physics & Instrumentation'}
            </Typography>
          </Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            Math, Physics, Engineering, and Computer Science. Practical topics covered included <b>Matlab, Vb.net, Ladder logic programming with PLCs, Automation, Networking, Digital instrumentation, Visual programming with Labview & Astrophysics</b>.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} sx={{ textAlign: 'right' }}>
          <Typography variant="body2" sx={{ color: 'primary.main' }}>
            September 2010 - May 2014
          </Typography>
        </Grid>
      </Grid>

      {/* <Grid container spacing={4} sx={{ mb: 3 }}>
        <Grid item xs={12} md={8}>
          <Typography variant="h6">
            NuCamp
            <Typography component="span" sx={{ color: 'text.secondary', fontSize: '0.9em' }}>
              {' | MERN Stack'}
            </Typography>
          </Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            22-week online bootcamp to specialize in <b>React, Express, Node, and MongoDB</b>.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} sx={{ textAlign: 'right' }}>
          <Typography variant="body2" sx={{ color: 'primary.main' }}>
            April 2021 - August 2021
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Typography variant="h6">
            Open University
            <Typography component="span" sx={{ color: 'text.secondary', fontSize: '0.9em' }}>
              {' | Software Development (M813)'}
            </Typography>
          </Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            Acquired professional and technical skills together with a deeper understanding of <b>analysis, design, software construction, and testing</b>; design practices from <b>design patterns to software architectures</b> and frameworks <b>Java & JavaEE</b>.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} sx={{ textAlign: 'right' }}>
          <Typography variant="body2" sx={{ color: 'primary.main' }}>
            March 2019 - September 2019
          </Typography>
        </Grid>
      </Grid> */}
    </Box>
  );
}

export default Education;
