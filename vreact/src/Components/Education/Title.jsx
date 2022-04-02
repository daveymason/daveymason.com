import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

import "../../App.css";


export default function Title() {
  return (
    <Grid
    container
    direction="row"
    alignItems="center"
    justifyContent="center"
    xs={12}
    sx={{ pt: 0 }}
    >
      <Typography variant="h1" sx={{pb:2}}>
          <span className="bigD">E</span>ducation
          <Divider variant="middle" sx={{backgroundColor: '#AF2C50 !important'}}/>
      </Typography>
      </Grid>
)}