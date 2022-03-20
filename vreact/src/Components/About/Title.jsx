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

export default function Title() {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      className="greenText"
      xs={10}
      sm={9}
      md={6}
      xl={5}
      sx={{ pt: 2, pb:4 }}
    >
      <ThemeProvider theme={theme}>
        <Typography variant="h1" sx={{pb:2}}>
          <span className="bigD">D</span>avey <span className="bigM">M</span>
          ason
          <Divider variant="middle" sx={{backgroundColor: '#AF2C50 !important'}}/>
      </Typography>
        
        <Typography variant="subtitle1">
          <span className="boldIrish">Irish</span> <b>Developer</b> with a keen
          interest in <b>UX</b>&<b>UI</b>.

          <ul class="dev-icons">
            <li
              class="list-inline-item hvr-float-shadow"
              data-toggle="tooltip"
              data-placement="top"
              title="HTML 5"
            >
              <i class="fab fa-html5"></i>
            </li>
            <li
              class="list-inline-item hvr-float-shadow"
              data-toggle="tooltip"
              data-placement="top"
              title="CSS3"
            >
              <i class="fab fa-css3-alt"></i>
            </li>
            <li
              class="list-inline-item hvr-float-shadow"
              data-toggle="tooltip"
              data-placement="top"
              title="Javascript"
            >
              <i class="fab fa-js-square"></i>
            </li>
            <li
              class="list-inline-item hvr-float-shadow"
              data-toggle="tooltip"
              data-placement="top"
              title="React.js"
            >
              <i class="fab fa-react"></i>
            </li>
            <li
              class="list-inline-item hvr-float-shadow"
              data-toggle="tooltip"
              data-placement="top"
              title="Node.js"
            >
              <i class="fab fa-node-js"></i>
            </li>
            <li
              class="list-inline-item hvr-float-shadow"
              data-toggle="tooltip"
              data-placement="top"
              title="Php"
            >
              <i class="fab fa-php"></i>
            </li>
            <li
              class="list-inline-item hvr-float-shadow"
              data-toggle="tooltip"
              data-placement="top"
              title="Wordpress"
            >
              <i class="fab fa-wordpress"></i>
            </li>
            <li
              class="list-inline-item hvr-float-shadow"
              data-toggle="tooltip"
              data-placement="top"
              title="Sass"
            >
              <i class="fab fa-sass"></i>
            </li>
            <li
              class="list-inline-item hvr-float-shadow"
              data-toggle="tooltip"
              data-placement="top"
              title="Git & Github"
            >
              <i class="fab fa-git"></i>
            </li>
            <li
              class="list-inline-item hvr-float-shadow"
              data-toggle="tooltip"
              data-placement="top"
              title="npm"
            >
              <i class="fab fa-npm"></i>
            </li>
            <li
              class="list-inline-item hvr-float-shadow"
              data-toggle="tooltip"
              data-placement="top"
              title="Hooli"
            >
              <i class="fab fa-hooli"></i>
            </li>
          </ul>
        </Typography>
      </ThemeProvider>
    </Grid>
  );
}
