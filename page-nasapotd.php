<?php get_header(); ?>

<div class="main">
    <div class="container">
      <p class="text-center"> Below is the NASA picture of the day. Please have a little patience, while NASA could send people tot he moon in 1969 their API is a little slow in 2020 for some reason.</p>
        <div id="output">
          <tag id="img"> </tag>
          <p id="copyright">Author(if accredited): </p>

          <h1 id="title">Title: </h1>

          <p id="explanation"></p>
        </div>
    </div>

    <hr class="projectsContactSplit">
    
<?php get_footer(); ?>

<script>
	$.ajax({
		url:"https://api.nasa.gov/planetary/apod?api_key=MrsVBoKDMoHuT4LoE4Jkz4pbyHfxFJyXS4zTtEpT",
		success: function(data){
		document.getElementById("img").innerHTML="<img src='"+data.url+"'style='width:750px;'/>";
		document.getElementById("copyright").innerHTML=data.copyright;
		document.getElementById("title").innerHTML=data.title;
		document.getElementById("explanation").innerHTML=data.explanation;
		}
	});
</script>