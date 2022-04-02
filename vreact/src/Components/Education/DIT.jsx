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

export default function DIT() {
  return (
    <Grid
      container
      direction="column"
      alignItems="flex-start"
      justifyContent="center"
      className="greenText"
      xs={10}
      sm={10}
      md={5}
      xl={5}
      sx={{ p: 2, pb:1, my: 3 }}
    >
      <ThemeProvider theme={theme}>
        <Typography variant="subtitle1">B.Sc.- Digital Technology & Design</Typography>
        <Typography variant="caption" gutterBottom sx={{ pl: 1 }}>
          Dublin Institute of Technology | 2018
        </Typography>
        <Typography variant="body1" sx={{ pl: 2 }}>
          <Divider
            sx={{ backgroundColor: "#AF2C50 !important" }}
          />
          <Grid sx={{ pl: 2, py: 1 }}>
          <li> Learned to design and develop full stack applications studied remotely. </li>
            <li> Became proficient in HTML, CSS, Javascript, Php & MySQL. </li>
            <li> Developed with libraries and frameworks such as Bootstrap, Angular, jQuery, Wordpress, CodeIgnitor & Phonegap.</li>
  
          </Grid>
        </Typography>

      </ThemeProvider>
    </Grid>
  );
}
