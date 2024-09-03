import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import projectImage1 from '../assets/img/KinderSync.png';
import projectImage2 from '../assets/img/projectInvoice.png';
import projectImage3 from '../assets/img/nightmareTales.png';

function Projects() {
  return (
    <Box component="section" id="code" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h2" sx={{ mb: 5 }}>
        Projects
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Card>
            <Badge 
              badgeContent="JS/Php" 
              color="primary" 
              sx={{ position: 'absolute', top: 16, left: '50%', transform: 'translateX(-50%)', zIndex: 1 }} 
            />
            <CardMedia
              component="img"
              height="200"
              image={projectImage1}
              alt="AI Lesson Planner"
            />
            <CardContent>
              <Typography variant="h5" component="h5">
                AI Lesson Planner
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Built using <b>CSS</b> & <b>Php</b>, this <b>Wordpress Plugin</b> integrates with OPENAI's ChatGPT
                to generate a custom lesson plan with auto translations to enhance communication.
              </Typography>
              <Button
                variant="contained"
                color="warning"
                href="https://kindersync.com/ai-lesson-planner"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ mr: 1 }}
              >
                Try it out
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <Badge 
              badgeContent="JS/Python" 
              color="secondary" 
              sx={{ position: 'absolute', top: 16, left: '50%', transform: 'translateX(-50%)', zIndex: 1 }} 
            />
            <CardMedia
              component="img"
              height="200"
              image={projectImage2}
              alt="Invoice Integrator"
            />
            <CardContent>
              <Typography variant="h5" component="h5">
                Invoice Integrator
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Hackathon entry for Google's GenAI DevPost hackathon. Developed using <b>React</b>, on the front-end and <b>Python</b> on the back. Hosted on Google Cloud with Vertex-AI.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                href="https://devpost.com/software/invoice-integrator"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ mr: 1 }}
              >
                Visit
              </Button>
              <Button
                variant="contained"
                color="warning"
                href="https://github.com/daveymason/Invoice-Integrator"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <Badge 
              badgeContent="C#/Unity" 
              color="info" 
              sx={{ position: 'absolute', top: 16, left: '50%', transform: 'translateX(-50%)', zIndex: 1 }} 
            />
            <CardMedia
              component="img"
              height="200"
              image={projectImage3}
              alt="Nightmare Tales"
            />
            <CardContent>
              <Typography variant="h5" component="h5">
                Nightmare Tales
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                A fun little game developed using <b>Unity</b>, utilizing <b>C#</b>. My role was to create a narrative, design the world, and implement the UI & "Game Feel". The "student feel" came naturally.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                href="https://daveymason.com/assets/videos/NighmareTalesTrailer.mp4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch Game Trailer
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Projects;
