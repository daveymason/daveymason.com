import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

function Experience() {
  return (
    <Box component="section" id="experience" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h2" sx={{ mb: 5 }}>
        Experience
      </Typography>

      {/* Experience Entries */}
      <Grid container spacing={4} sx={{ mb: 3 }}>
        <Grid item xs={12} md={8}>
          <Typography variant="h6" component="h3">
            UX Software Engineer 
            <Typography component="span" sx={{ color: 'text.secondary', fontSize: '0.9em' }}>
              {' | '}
              <Link href="https://reelmetrics.com" target="_blank" rel="noopener noreferrer" sx={{ textDecoration: 'none', color: 'primary.main' }}>
                Reel Metrics
              </Link>
            </Typography>
          </Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            Design and develop <b>reusable reactive components</b> which consumed APIs from Ruby & Rails or AWS. Helped draft the first ISMS and conducted other essential security operations.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} sx={{ textAlign: 'right' }}>
          <Typography variant="body2" sx={{ color: 'primary.main' }}>
            October 2021 - Present
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={4} sx={{ mb: 3 }}>
        <Grid item xs={12} md={8}>
          <Typography variant="h6" component="h3">
            Web Developer & Designer 
            <Typography component="span" sx={{ color: 'text.secondary', fontSize: '0.9em' }}>
              {' | '}
              <Link href="https://fatheadsolutions.com" target="_blank" rel="noopener noreferrer" sx={{ textDecoration: 'none', color: 'primary.main' }}>
                Fat Head Solutions
              </Link>
            </Typography>
          </Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            Designed and developed a wide range of digital solutions using <b>Wordpress</b> & <b>CSS</b>, such as an e-commerce store, websites for restaurants, and a premium content blogging site. Successfully led the implementation of <b>SEO</b>, <b>e-mails</b>, <b>domains</b>, <b>hosting</b>, and <b>web security</b>.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} sx={{ textAlign: 'right' }}>
          <Typography variant="body2" sx={{ color: 'primary.main' }}>
            October 2019 - October 2021
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Typography variant="h6" component="h3">
            Web Developer & Designer 
            <Typography component="span" sx={{ color: 'text.secondary', fontSize: '0.9em' }}>
              {' | '}
              <Link href="https://deitg.com" target="_blank" rel="noopener noreferrer" sx={{ textDecoration: 'none', color: 'primary.main' }}>
                DEITG I.T. Generalists
              </Link>
            </Typography>
          </Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            Designed, developed, deployed, tested, secured, maintained, and updated 50+ websites and web apps using <b>HTML</b>, <b>CSS</b>, <b>Javascript</b>, <b>jQuery</b>, <b>Php</b>, <b>MySQL</b>, <b>Bootstrap</b>, <b>Wordpress</b> & <b>CakePhp</b>.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} sx={{ textAlign: 'right' }}>
          <Typography variant="body2" sx={{ color: 'primary.main' }}>
            March 2018 - October 2019
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Experience;
