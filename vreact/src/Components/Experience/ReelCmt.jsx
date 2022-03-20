import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import Divider from "@mui/material/Divider";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import "../../App.css";
const theme = createTheme({
  typography: {
    subtitle1: {
      fontSize: 24,
      color: "black",
      fontStyle: "oblique",
    },
    h1: {
      fontSize: "3.5rem !important",
      textAlign: "center",
    },
  },
});

export default function ReelgCmt() {
return(

<Grid
      container
      direction="column"
      alignItems="flex-start"
      justifyContent="flex-start"
      className="greenText"
      xs={10}
      sm={10}
      md={5}
      sx={{ p: 1, my:5 }}
    >
      <ThemeProvider theme={theme}>
        <Typography variant="subtitle1">
        Web Developer | <a target="_blank" href="https://reelmetrics.com">ReelMetrics</a>
        </Typography>
        <div class="subheading mb-3"></div>
        <Typography>
        Lorem Ipsum Dollar Set Lumantae. Insert blurb here about current role. React, Ruby, Rails, Docker, Webpack, Aws, Kubernetes, TeamCity and the likes.
        <Divider variant="middle" sx={{backgroundColor: '#AF2C50 !important'}}/>
        </Typography>
        

        <Typography>
        March 2018 - October 2019
        </Typography>
        
      </ThemeProvider>
</Grid>
)}