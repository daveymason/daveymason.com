import Grid from "@mui/material/Grid";
import Title from "./Title";
import NuCamp from "./NuCamp";
import OpenUni from "./OpenUni";  
import CIT from "./CIT";    
import DIT from "./DIT";
import "../../App.css";

export default function Education() {
  return (
    <Grid
      container fluid
      direction="row"
      alignItems="center"
      justifyContent="space-around"
      xs={12}
      md={12}
      xl={12}
      sx={{ p: 4 }}
    >
      <Title />
      <NuCamp />
      <OpenUni />
      <DIT />
      <CIT />
    </Grid>
  );
}
