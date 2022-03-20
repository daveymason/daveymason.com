import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import "./About.css";

export default function Title() {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      sx={{ mb: 2 }}
    >
      <Typography variant="h1" component="div" gutterBottom sx={{ mx: 3 }}>
        Davey Mason
      </Typography>
      <Typography variant="h5" component="div" gutterBottom sx={{ mx: 3 }}>
        Irish <b>Web Developer</b> that loves <b>Javascript</b> & <b>Php</b>.
      </Typography>
    </Grid>
  );
}
