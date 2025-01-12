import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCircle } from '@fortawesome/free-solid-svg-icons';

function Experience() {
  return (
    <Box component="section" id="experience" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h2" sx={{ mb: 5 }}>
        <FontAwesomeIcon icon={faBriefcase} className="styledIcon" /> Experience
      </Typography>

      {/* Experience Entries */}
      <Grid container spacing={4} sx={{ mb: 3 }}>
        <Grid item xs={12} md={8}>
          <Typography variant="h6" component="h3">
            UX Engineer
            <Typography component="span" sx={{ color: 'text.secondary', fontSize: '0.9em' }}>
              {' | '}
              <Link href="https://reelmetrics.com" target="_blank" rel="noopener noreferrer" sx={{ textDecoration: 'none', color: 'primary.main' }}>
                ReelMetrics
              </Link>
              {' | Leiden, Netherlands (Hybrid)'}
            </Typography>
          </Typography>
          <List sx={{ mt: 1, paddingLeft: 2 }}>
            <ListItem sx={{ paddingBottom: 0 }}>
              <ListItemIcon>
                <FontAwesomeIcon icon={faCircle} className="bulletIcon" />
              </ListItemIcon>
              <ListItemText primary="Led end-to-end prototyping processes, seamlessly integrating UX/UI designs based on stakeholder requirements." />
            </ListItem>
            <ListItem sx={{ paddingBottom: 0 }}>
              <ListItemIcon>
                <FontAwesomeIcon icon={faCircle} className="bulletIcon" />
              </ListItemIcon>
              <ListItemText primary="Delivered scalable and efficient solutions with React (JSX, ES6, React Router), Storybook, Jest, REST APIs, Webpack, SWC, Babel, and Ruby on Rails." />
            </ListItem>
            <ListItem sx={{ paddingBottom: 0 }}>
              <ListItemIcon>
                <FontAwesomeIcon icon={faCircle} className="bulletIcon" />
              </ListItemIcon>
              <ListItemText primary="Redesigned the search functionality to provide enhanced data previews, reducing average user session times by 66% and earning positive user feedback." />
            </ListItem>
            <ListItem sx={{ paddingBottom: 0 }}>
              <ListItemIcon>
                <FontAwesomeIcon icon={faCircle} className="bulletIcon" />
              </ListItemIcon>
              <ListItemText primary="Engineered React-based digital tools for slot machine reconciliation, improving data accuracy from under 80% to over 90%." />
            </ListItem>
            <ListItem sx={{ paddingBottom: 0 }}>
              <ListItemIcon>
                <FontAwesomeIcon icon={faCircle} className="bulletIcon" />
              </ListItemIcon>
              <ListItemText primary="Resolved performance bottlenecks on pages with large datasets, cutting loading times from 45 seconds to under 15 seconds pre-cache." />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={4} sx={{ textAlign: 'right' }}>
          <Typography variant="body2" sx={{ color: 'primary.main' }}>
            2021 - 2024
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={4} sx={{ mb: 3 }}>
        <Grid item xs={12} md={8}>
          <Typography variant="h6" component="h3">
            Co-Founder & Tech Lead
            <Typography component="span" sx={{ color: 'text.secondary', fontSize: '0.9em' }}>
              {' | '}
              <Link href="https://fatheadsolutions.com" target="_blank" rel="noopener noreferrer" sx={{ textDecoration: 'none', color: 'primary.main' }}>
                FatHead Solutions
              </Link>
              {' | Remote'}
            </Typography>
          </Typography>
          <List sx={{ mt: 1, paddingLeft: 2 }}>
            <ListItem sx={{ paddingBottom: 0 }}>
              <ListItemIcon>
                <FontAwesomeIcon icon={faCircle} className="bulletIcon" />
              </ListItemIcon>
              <ListItemText primary="Developed an LMS during COVID for a Chinese university, which was tricky to navigate but ultimately successful with many students showing great appreciation." />
            </ListItem>
            <ListItem sx={{ paddingBottom: 0 }}>
              <ListItemIcon>
                <FontAwesomeIcon icon={faCircle} className="bulletIcon" />
              </ListItemIcon>
              <ListItemText primary="Developed an AI-powered WordPress plugin (jQuery, PHP, CSS) for bilingual educators to create culturally sensitive lesson plans in multiple languages." />
            </ListItem>
            <ListItem sx={{ paddingBottom: 0 }}>
              <ListItemIcon>
                <FontAwesomeIcon icon={faCircle} className="bulletIcon" />
              </ListItemIcon>
              <ListItemText primary="Led multiple ed-tech projects through various stages of testing with stakeholders ranging from kindergarteners to experienced University professors." />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={4} sx={{ textAlign: 'right' }}>
          <Typography variant="body2" sx={{ color: 'primary.main' }}>
            2019 - 2021
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Typography variant="h6" component="h3">
            Web Developer (Client-Facing)
            <Typography component="span" sx={{ color: 'text.secondary', fontSize: '0.9em' }}>
              {' | '}
              <Link href="https://deitg.com" target="_blank" rel="noopener noreferrer" sx={{ textDecoration: 'none', color: 'primary.main' }}>
                DEITG
              </Link>
              {' | Cork, Ireland (Hybrid)'}
            </Typography>
          </Typography>
          <List sx={{ mt: 1, paddingLeft: 2 }}>
            <ListItem sx={{ paddingBottom: 0.5 }}>
              <ListItemIcon>
                <FontAwesomeIcon icon={faCircle} className="bulletIcon" />
              </ListItemIcon>
              <ListItemText primary="Designed and developed 50+ websites using PHP, CSS, JavaScript, and MySQL, while modernizing legacy PHP applications from version 5.6 to 7.x to enhance security and performance." />
            </ListItem>
            <ListItem sx={{ paddingBottom: 0.5 }}>
              <ListItemIcon>
                <FontAwesomeIcon icon={faCircle} className="bulletIcon" />
              </ListItemIcon>
              <ListItemText primary="Contributed to large-scale web applications with jQuery, Bootstrap, and CakePHP, ensuring seamless user experiences." />
            </ListItem>
            <ListItem sx={{ paddingBottom: 0.5 }}>
              <ListItemIcon>
                <FontAwesomeIcon icon={faCircle} className="bulletIcon" />
              </ListItemIcon>
              <ListItemText primary="Streamlined web management workflows, standardizing processes to boost efficiency and support DevOps practices, improving project delivery speed and quality." />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={4} sx={{ textAlign: 'right' }}>
          <Typography variant="body2" sx={{ color: 'primary.main' }}>
            2018 - 2019
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Experience;
