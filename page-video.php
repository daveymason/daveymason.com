<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>jQuery Vimelar Plugin Demo</title>
<style>
html,* { margin:0; padding:0;}
h1,.jquery-script-ads { position:absolute; top:30px; text-align:center; left:30px; z-index:999; color:#fff;}
</style>
</head>

<body>
<div id="wrapper"></div>
<h1>Quick test using Vimeo</h1>

<script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
<script src="<?php bloginfo('template_directory'); ?>/js/jquery.vimelar.js" ></script>
<script>
$('document').ready(function() {
    var options = {
        videoId: '128418807',
        parameters: {
            autopause: 1,
            autoplay: 1,
            badge: 1,
            byline: 1,
            color: '000',
            loop: 1,
            player_id: 'demo',
            portrait: 1,
            title: 1
        }
    };
    $('#wrapper').vimelar(options);
});
</script>
</body>
</html>