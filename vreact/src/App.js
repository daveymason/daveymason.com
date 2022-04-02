// import logo from './logo.svg';
import TabPanel from './Components/TabPanel';
import LinksFooter from './Components/Footer/LinksFooter';

import Grid from "@mui/material/Grid";

import './fontawesome.css';

function App() {
  return (

      <Grid
      className="App"
      container
      direction="column"
      alignItems="center"
      sx={{ overflow: 'hidden', minHeight: '100vh', maxHeight: '95vh', bgcolor: "rgba(255, 255, 255, 0.42)" }}
    >
      <TabPanel />
      <LinksFooter />
      
      </Grid>
  
  );
}

export default App;
