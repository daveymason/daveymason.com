// import logo from './logo.svg';
import TabPanel from './Components/TabPanel';
import LinksFooter from './Components/Footer/LinksFooter';

import Grid from "@mui/material/Grid";

import './fontawesome.css';

function App() {
  return (
    <div className="App">
      <Grid
      container
      direction="column"
      alignItems="center"
    >
      <TabPanel />
      <LinksFooter />
      
      </Grid>
    </div>
  );
}

export default App;
