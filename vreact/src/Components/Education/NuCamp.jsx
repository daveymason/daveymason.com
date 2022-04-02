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
      textAlign: "center",
      fontStyle: "oblique",
    },
    h1: {
      fontSize: "3.5rem !important",
      textAlign: "center",
    },
  },
});

export default function NuCamp() {
  return (
    <Grid
      container
      direction="column"
      alignItems="flex-start"
      justifyContent="flex-start"
      className="greenText"
      xs={10}
      sm={10}
      md={3}
      xl={3}
      sx={{ p:2, pb:1, px:4, my: 3 }}
    >
      <ThemeProvider theme={theme}>
      <Typography variant="caption" gutterBottom>
        <a target="_blank" rel="noreferrer" href="https://www.nucamp.co/bootcamp-overview/full-stack-web-mobile-development">
            NuCamp
          </a> | 2021
        </Typography>
        <Typography variant="subtitle1">
          Full-Stack Bootcamp
        </Typography>

        <Typography variant="body1" >
        <Divider
            sx={{ backgroundColor: "#AF2C50 !important", textAlign: "center !important", mb:1}}
          />
          <Grid sx={{pl:2}}>
        <li>Learned a new tech-stack and upskilled with React, React Native, Express, MongoDB and Node. </li>
        </Grid>
        </Typography>
      </ThemeProvider>
    </Grid>
  );
}