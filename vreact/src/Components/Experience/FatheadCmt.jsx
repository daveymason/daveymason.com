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

export default function FatheadCmt() {
  return (
    <Grid
      container
      direction="column"
      alignItems="flex-start"
      justifyContent="flex-start"
      className="greenText"
      xs={10}
      sm={10}
      md={5}
      xl={5}
      sx={{ p: 1, my: 5 }}
    >
      <ThemeProvider theme={theme}>
        <Typography variant="subtitle1">
          Web Developer |{" "}
          <a target="_blank" href="https://fatheadsolutions.com">
            Fat Head Solutions
          </a>
        </Typography>
        <Typography>
          <b>Design Wordpress websites</b>, ensure the <b>speed</b> &{" "}
          <b>security</b> of the sites, manage <b>domains</b> & <b>hosting</b>.
          Troubleshot issues and add custom <b>CSS</b> where needed.{" "}
          <Divider
            variant="middle"
            sx={{ backgroundColor: "#AF2C50 !important" }}
          />
        </Typography>

        <Typography>October 2019 - Present</Typography>
      </ThemeProvider>
    </Grid>
  );
}
