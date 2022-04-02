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

export default function DeitgCmt() {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      className="greenText"
      xs={10}
      sm={10}
      md={5}
      sx={{ p: 1 }}
    >
      <ThemeProvider theme={theme}>
        <Typography variant="subtitle1">
          Web Developer |{" "}
          <a target="_blank" href="https://deitg.com">
            DEITG
          </a>
        </Typography>
        <Typography align="center">
          Designed, developed, deployed, tested, secured, maintained and updated
          50+ websites and web apps using <b>HTML</b>, <b>CSS</b>,{" "}
          <b>Javascript</b>, <b>jQuery</b>, <b>Php</b>,<b>MySQL</b>,{" "}
          <b>Bootstrap</b>, <b>Wordpress</b> & <b>CakePhp</b>.
          <Divider
            variant="middle"
            sx={{ backgroundColor: "#AF2C50 !important", mt:1}}
          />
        </Typography>

        <Typography>March 2018 - October 2019</Typography>
      </ThemeProvider>
    </Grid>
  );
}
