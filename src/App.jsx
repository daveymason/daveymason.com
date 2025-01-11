import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2B3A4F',
    },
    text: {
      primary: '#2B3A4F',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
      marginBottom: '1.5rem',
      color: '#2B3A4F',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      marginBottom: '1.5rem',
      color: '#2B3A4F',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
      color: '#2B3A4F',
    },
    h4: {
      color: '#2B3A4F',
    },
    h5: {
      color: '#2B3A4F',
    },
    h6: {
      color: '#2B3A4F',
    },
    body1: {
      fontSize: '1rem',
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
          <Divider sx={{ my: 4 }} />
          <Contact />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
