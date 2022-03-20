import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";


import ServeCmt from "./ServeCmt";
import DeitgCmt from "./DeitgCmt";
import FatheadCmt from "./FatheadCmt";
import ReelCmt from "./ReelCmt";
import Title from "./Title";

import "../../App.css";

export default function Experience() {
  return (
    <Grid
      container
      direction="row"
      alignItems="space-between"
      justifyContent="space-around"
      xs={12}
      md={12}
      xl={12}
      sx={{ p: 1 }}
    >
      <Title />
      <ReelCmt />
      <ServeCmt />
      <DeitgCmt />
      <FatheadCmt />
      
    </Grid>
  );
}
