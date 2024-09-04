import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

const theme = createTheme({
  palette: {
    primary: {
      main: '#007bff',
    },
    secondary: {
      main: '#6c757d',
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: 'Lato, sans-serif',
    h1: {
      fontFamily: 'Oswald, sans-serif',
      fontSize: '2.5rem',
      fontWeight: 600,
      marginBottom: '1.5rem',
    },
    h2: {
      fontFamily: 'Oswald, sans-serif',
      fontSize: '2rem',
      fontWeight: 600,
      marginBottom: '1.5rem',
    },
    h3: {
      fontFamily: 'Oswald, sans-serif',
    },
    body1: {
      color: '#6c757d',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <Navbar />
        <Container maxWidth="lg" sx={{ py: 5, my:5 }}>
          <About />
          <Divider sx={{ my: 4 }} />
          <Projects />
          <Divider sx={{ my: 4 }} />
          <Experience />
          <Divider sx={{ my: 4 }} />
          <Education />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
