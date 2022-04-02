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

export default function OpenUni() {
  return (
    <Grid
      container
      direction="column"
      alignItems="flex-start"
      justifyContent="center"
      className="greenText"
      xs={10}
      sm={10}
      md={8}
      xl={8}
      sx={{ p: 2, pb:1, my: 3 }}
    >
      <ThemeProvider theme={theme}>
      <Typography variant="caption" gutterBottom >
          Open University | 2019
        </Typography>
        <Typography variant="subtitle1" sx={{pl:1}}>
        Postgraduate Module in Software Development
        </Typography>
        
        <Typography variant="body1" sx={{pl:2}}>
        <Divider
            sx={{ backgroundColor: "#AF2C50 !important" }}
          />
       <Grid sx={{pl:2, py:1}}>
          <li>Acquired professional and technical skills with a deeper understanding of analysis, design, software construction and testing. </li>
          <li>Engaged with various design practices from design patterns to software architectures and frameworks. </li>
          </Grid>
        </Typography>
      </ThemeProvider>
    </Grid>
  );
}