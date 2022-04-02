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
    container fluid
    direction="row"
    alignItems="center"
    justifyContent="space-around"
    className="backgroundImage"
    xs={12}
    md={12}
    xl={12}
    sx={{ p: 4 }}
  >
      <Title />
      <ReelCmt />
      <ServeCmt />
      <DeitgCmt />
      <FatheadCmt />
      
    </Grid>
  );
}
