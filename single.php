<?php get_header();?>
<div class="container-fluid" id="Blog">
      <div class="row bottomMargin">
        <div class="col-sm-12 text-center bottomMargin servicesPadding" id="whiteText">
          <h2 class="display-3"><i class="fas fa-pen">
          </i>
          Blog</h2>
          <p class="bottomMargin">A mix of things that interest me</p>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-8">
          <div class="card bottomMargin text-center">
            <div class="card-header cardHeadRed" id="whiteText">
              <h2>Blog posts</h2>
            </div>
            <div class="card-body">
              <?php if(have_posts()): ?>
                <?php while(have_posts()) : the_post(); ?>
                <article class="post">
                  <div class="row">
                    <?php if(has_post_thumbnail()): ?>
                      <div class="col-md-3">
                        <div class="post-thumbnail">
                          <?php the_post_thumbnail(); ?>
                        </div>
                      </div> <!-- col=md3 -->
                      <div class="col-md-9">
                        <h2>
                          <a href="<?php echo the_permalink();?>">
                           <?php echo the_title(); ?>
                          </a>
                        </h2>

                        <p class="meta">
                          Posted at <?php the_time(); ?> on <?php the_date(); ?>
                        </p>

                        <div class="excerpt">
                        <?php echo get_the_excerpt(); ?>
                        </div>

                        <br>
                        
                        <a class="btn btn-blog" href="<?php the_permalink(); ?>">
                        Read More &raquo;
                        </a>
                      </div>
                      <?php else : ?>
                        <div class="col-md-12">
                          <h2>
                            <a href="<?php echo the_permalink();?>">
                            <?php echo the_title(); ?>
                            </a>
                          </h2>

                          <p class="meta">
                          Posted at <?php the_time(); ?> on <?php the_date(); ?>
                        </p>

                        <div class="excerpt">
                        <?php echo get_the_excerpt(); ?>
                        </div>

                        <br>

                        <a class="btn btn-blog" href="<?php the_permalink(); ?>">
                        Read More &raquo;
                        </a>

                        </div>
                    <?php endif; ?>
                  </div><!-- row -->
                </article>
                <?php endwhile; ?>
                  <?php endif; ?>
            </div> <!-- card-body -->
          </div> <!-- card -->
        </div> <!-- col-sm-8 -->
        <div class="col-sm-4 centerAll">
            <button type="button" class="btn hvr-float-shadow"><a href="#" target="_blank"><i class="fas fa-chart-line bigStyleAff"></i></a></button>
        </div>
      </div> <!-- row -->
      <!-- Add WP Cdde here for the blog section-->
    </div> <!-- Blog container-fluid -->
    <?php get_footer();?>