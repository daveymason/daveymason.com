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

export default function ServeCmt() {
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
      sx={{ p: 1, my: 5 }}
    >
      <ThemeProvider theme={theme}>
        <Typography variant="subtitle1">
          Lead Web Developer |{" "}
          <a target="_blank" href="https://serve.ie">
            SERVE
          </a>
        </Typography>
        <Typography variant="body1">
          Redesign, optimise & maintain{" "}
          <a target="_blank" href="https://serve.ie">
            serve.ie
          </a>
          . Implement pixel perfect UI from designers using built in{" "}
          <b>Wordpress</b> tools, maintain and write custom <b>CSS</b> code and
          help troubleshoot issues. Manage the <b>SEO</b>, <b>web security</b>,
          <b>e-mails</b>, <b>domains</b> & <b>hosting</b>.
          <Divider
            variant="middle"
            sx={{ backgroundColor: "#AF2C50 !important" }}
          />
        </Typography>

        <div class="flex-shrink-0">
          <span class="text-primary">March 2021 - Present</span>
        </div>
      </ThemeProvider>
    </Grid>
  );
}
