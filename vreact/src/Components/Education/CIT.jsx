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

export default function CIT() {
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
        <Typography variant="subtitle1">
          B.Sc.- Applied Physics & Instrumentation
        </Typography>
        <Typography variant="caption" gutterBottom sx={{ pl: 1 }}>
          Cork Institute of Technology | 2014
        </Typography>
        <Typography variant="body1" sx={{ pl: 2 }}>
          <Divider sx={{ backgroundColor: "#AF2C50 !important" }} />
          <Grid sx={{ pl: 2, py: 1 }}>
            <li> A 50% practical based on campus degree focusing on Maths, Physics and Engineering. </li>
            <li> Learned a wide range of technical skills such as 
              Matlab, VB.net, LabView visual programming, programming for PLC's,
              and programming for DeltaV.
            </li>
          </Grid>
        </Typography>
      </ThemeProvider>
    </Grid>
  );
}
