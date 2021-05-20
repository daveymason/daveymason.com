<?php get_header();?>

<div class="container-fluid" id="projectsGamesIntro">
        <div class="row">
            <div class="col-sm-12 text-center">
                <i class="fas fa-gamepad projectsIntroIcon"></i>
                <h1 class="display-2">Games</h1>
                <p>Love Playing | Love Developing</p>
                <a href="#websitesRow">
                    <i class="fas fa-arrow-down projectsIconIntro"></i>
                </a>
            </div>
        </div>     
</div> <!-- #Intro -->
<!-- FP: This next part should be a post loop -->
<div class="container-fluid" id="projectsContainer">

        <div class="row" id="websitesRow">
          <div class="col-sm-12 text-center">
              <div class="card cardNav"> 
                  <div class="card-header headerNav">
                      <h2><a href="https://eloquent-colden-14ba2b.netlify.app/">TIC-TAC-TOE</a></h2>
                  </div>
                  <div class="card-body">
                      <div class="row">
                          <div class="col-xs-12 col-md-4">
                          <a target="_blank" href="https://eloquent-colden-14ba2b.netlify.app/"><img class="img-responsive hvr-float-shadow bottomMargin" src="https://daveymason.com/wp-content/themes/Personal/Images/gameTicTacToe.png" alt="Davey Mason" width="75%" height="auto"></a>
                      </div>
                          <div class="col-xs-12 col-md-5 d-flex align-items-center text-center">
                              <p class="paddedText"> A fun game that I built for my students when I thought them how to play Tic-Tac-Toe. It was also a reason to start building projects using <b>React</b> following the documentation on the site. I also had the chance to test out <b>Netifly's CI/CD</b> process which really impresed me. </p>
                          </div>    
                          <div class="col-xs-12 col-md-3 d-flex align-items-center gamesCenterButton">
                          <p><a target="_blank" class="btn btn-projectsWebsites btn-lg" href="https://eloquent-colden-14ba2b.netlify.app/" role="button">Demo <i class="far fa-arrow-alt-circle-right btnRightArrow"></i></a> ~
                          <a target="_blank" class="btn btn-projectsWebsites btn-lg" href="https://github.com/davidmason5/tic-tac-toe" role="button">Code <i class="far fa-arrow-alt-circle-right btnRightArrow"></i></a></p>                      
                         </div>
                      </div>
                  </div>
              </div>
          </div> <!-- col -->
        </div>
<!--
    <div class="row" id="websitesRow">
        <div class="col-sm-12 text-center">
            <div class="card bottomMargin cardNav">
                <div class="card-header headerNav">
                    <h2><a href="https://daveymason.com/projects/games/snake">Snake Strikes Back</a> - The classic, but with a twist. </h2>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-xs-12 col-md-4">
                        <a target="_blank" href="https://daveymason.com/projects/games/snake"><img class="img-responsive paddedText hvr-float-shadow bottomMargin" src="https://daveymason.com/wp-content/themes/Personal/Images/snakeGameDaveyMason.jpg" alt="Davey Mason" width="75%" height="auto"></a>
                        </div>

                        <div class="col-xs-12 col-md-5 d-flex align-items-center text-center">
                            <p class="paddedText"> As the legend goes, St.Patrick drove all the snakes out of Ireland. However, thanks to some HTML, CSS, JavaScript and Phaser they are back with avengeance. Bring back some memories of your old Nokia with this classic snake inspired game and relive the stress that tormented you as a child! </p>
                        </div>
                        <div class="col-xs-12 col-md-3 d-flex align-items-center gamesCenterButton">
                            <a class="btn btn-projectsWebsites btn-lg" href="https://daveymason.com/projects/games/snake" role="button">Play Now >></a>                      
                        </div>
                    </div>
                </div>
             </div>
        </div>
    </div>  id="websitesRow" -->
</div> <!-- id="projectsContainer" -->

<hr class="otherProjectsSplit">

<div class="container-fluid" id="projectOtherContainer">
    <div class="row" id="whiteText">
        <div class="col-sm-12 text-center bottomMargin">
            <h2 class="display-3">Other Projects</h1>
            <p> Check out some of my websites and other projects </p>
        </div>
    </div>
    
    <div class="row" id="whiteText">
        <div class="col-sm-6 col-xs-12">
          <div class="card text-center transparent topMargin bottomMargin">
            <div class="card-header transparent">
              <i class="fas fa-laptop pageDevelopIcon"></i>
              <br>
            </div>
            <div class="card-body">
            <h2>Websites</h2>
              <p class="card-title">Take a look at some of my websites.</p>
              <p><a class="btn btn-projects btn-lg" href="https://daveymason.com/projects/websites" role="button">Let's Go >></a></p>
            </div>
          </div> <!-- card -->
        </div> <!-- col-sm-4 -->

        <div class="col-sm-6 col-xs-12">
          <div class="card text-center transparent topMargin bottomMargin">
            <div class="card-header transparent">
              <i class="fas fa-file-code pageDevelopIcon"></i>
              <br>
            </div>
            <div class="card-body">
            <h2>Other</h2>
              <p class="card-title">From Pokémon to NASA.</p>
              <p><a class="btn btn-projects btn-lg" href="https://daveymason.com/projects/other" role="button">Let's Go >></a></p>
            </div>
          </div> <!-- card -->
        </div> <!-- col-sm-6 -->
    </div> <!--row-->
</div> <!-- projectsContainer -->

<hr class="projectsContactSplit">

<?php get_footer();?>