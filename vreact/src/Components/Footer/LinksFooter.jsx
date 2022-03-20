import './LinksFooter.css';
import Grid from "@mui/material/Grid";
import ParticlesBg from "particles-bg";



export default function LinksFooter() {
    return (
        <Grid
        container
        direction="column"
        alignItems="center"
        position="fixed" 
        sx={{ top: 'auto', bottom: 12 }}
      >
        <div class="social-icons">
        <a class="social-icon hvr-float-shadow" target="_blank"
            href="https://www.linkedin.com/in/davey-mason/" data-toggle="tooltip" data-placement="top" title="Connect with me!">
            <i class="fab fa-linkedin-in"></i>
        </a>
        <a class="social-icon hvr-float-shadow" target="_blank" 
            href="https://www.github.com/daveymason" data-toggle="tooltip" data-placement="top" title="Check out my code!">
            <i class="fab fa-github"></i>
        </a>
        <a class="social-icon hvr-float-shadow" target="_blank" 
            href="./assets/docs/Davey Mason - CV.pdf" data-toggle="tooltip" data-placement="top" title="Download my C.V!">
            <i class="fas fa-id-card"></i>
        </a>
        <a class="social-icon hvr-float-shadow" target="_blank" 
            href="mailto:daveymason@outlook.com" data-toggle="tooltip" data-placement="top" title="E-mail me!"> 
            <i class="fas fa-envelope"></i></a>
    </div>
    </Grid>
    );
  }




