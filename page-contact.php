<?php get_header(); ?>

<div class="container" id="Contact">
      <div class="row bottomMargin">
        <div class="col-sm-12 text-center servicesPadding">
          <h2 class="display-3"><i class="fas fa-comment-dots">
          </i>
          Contact</h2>
          <p>Interested in my services?</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-sm-12 centerAll bottomMargin">
          <div class="card text-center">
            <div class="card-header cardHeadGreen">
              <h2>E-mail Me</h2>
            </div>
            <div class="card-body">
             <button type="button" class="btn hvr-float-shadow"><a href="mailto:daveymason@outlook.com" target="_blank"><i class="far fa-envelope bigStyleContact ServIconShake1"></i></a></button>

              <p class="textPadding">For <b>website design</b>, <b>website development</b>, <b>SEO</b>, gaming services, <b>online teaching</b>, domains, <b>website hosting</b>, <b>Wordpress</b> websites, design and development; or any other web services that you might need feel free to e-mail me by clicking on the icon above or directly - <a href="mailto:daveymason@outlook.com" target="_blank">daveymason@outlook.com</a></p>
              <p><a class="btn btn-contact btn-lg" href="mailto:daveymason@outlook.com" role="button">E-mail now <i class="far fa-arrow-alt-circle-right btnRightArrow"></i></a></p>
            </div>
          </div>
        </div>
        
         <div class="col-md-6 col-sm-12">
          <div class="card bottomMargin centerAll">
            <div class="card-header cardHeadGreen">
              <h2>Online Query</h2>
            </div>
            <div class="card-body">
              <?php  echo do_shortcode( '[forminator_form id="124"]' ); ?> 
            </div>
          </div>  
        </div>  
      </div>
    </div>

    <!-- Jumbotron -->
    <div class="card card-image">
      <div class="text-white text-center rgba-stylish-strong py-5 px-4 centerAll">
        <div class="py-5">

          <!-- Content -->
          <div class="row bottomMargin topMargin bottomPadding" id="whiteText">
          <!-- <div class="col-sm-8 text-center bottomPadding">
                <h1 class="display-3">Web Developer</h1>
                <p>Tech Enthusiast | Hardcore Gamer | Space Geek.</p>
                <p><a class="btn btn-primary btn-lg hvr-float-shadow" href="https://daveymason.com/projects" role="button">Projects »</a></p>
            </div>  -->
            <div class="col-sm-4 bottomPadding">
              
                <h2 class="display-3"> LinkedIn </h2>
                <button type="button" class="btn btn-li hvr-float-shadow"><a href="https://www.linkedin.com/in/david-mason-1623277b/" target="_blank"><i class="fab fa-linkedin-in bigStyleLi"></i></a></button>
              
            </div>
            <div class="col-sm-4 bottomPadding">
              <h2 class="display-3"> GitHub </h2>
                <button type="button" class="btn btn-git hvr-float-shadow"><a href="https://www.github.com/davidmason5" target="_blank"><i class="fab fa-github bigStyleGh"></i></a></button>
              
            </div>
            <div class="col-sm-4 bottomPadding">
              <h2 class="display-3">C.V </h2>
                <button type="button" class="btn hvr-float-shadow"><a href="https://daveymason.com/wp-content/uploads/2021/04/David-Mason-CV.pdf" target="_blank"><i class="fas fa-id-card bigStyleCV"></i></a></button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Jumbotron -->

<?php get_footer(); ?>