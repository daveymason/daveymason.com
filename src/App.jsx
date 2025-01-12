import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
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
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      marginBottom: '1.5rem',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      color: '#6c757d',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          padding: '16px',
          marginBottom: '16px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          borderRadius: '8px',
        },
      },
    },
    MuiBox: {
      styleOverrides: {
        root: {
          background: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          backdropFilter: 'blur(10px)',
          color: '#fff',
          padding: '20px',
          margin: '20px',
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)',
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ py: 5, my:5 }}>
        <Navbar />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </Container>
    </ThemeProvider>
  );
}

export default App;
