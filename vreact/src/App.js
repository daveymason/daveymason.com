// import logo from './logo.svg';
import TabPanel from './Components/TabPanel';
import LinksFooter from './Components/Footer/LinksFooter';
import ParticlesBg from "particles-bg";

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

<ParticlesBg type="random" bg={true}/>
