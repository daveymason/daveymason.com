<?php 

// require_once('.:/opt/alt/php73/usr/share/pear/widgets/class-wp-widget-categories.php');
// require_once('widgets/class-wp-widget-recent-posts.php');
// require_once('widgets/class-wp-widget-recent-comments.php');


function theme_setup(){
    add_theme_support('post-thumbnails');
}

add_action('after_setup_theme', 'theme_setup');

function add_favicon() {
	echo '<link rel="shortcut icon" type="image/png" href="https://daveymason.com/wp-content/uploads/2020/02/favicon.ico" />';
}

add_action('wp_head', 'add_favicon');

// //Widget functions
// function init_widgets($id){
//     register_sidebar(array(
//         'name' => 'Sidebar',
//         'id' => 'sdebar',
//         'before_widget' => '<div class="panel panel-default">',
//         'after_widget' => '</div></div>',
//         'before_title' => '<div class="panel-heading"><h3 class="panel-title">',
//         'after_title' => '</h3></div><div class="panel body">'
//     ));
// }

// add_action('widgets_init', 'init_widgets');

// // Adds 'list-group-item' to categories li
// function add_new_class_list_categories($list){
//     $list = str_replace('cat-item', 'cat-item list-group-item', $list);
//     return $list;
// }

// add_filter('wp_list_categories', 'add_new_class_list_categories');

// //Register Widgets
// function wordstrap_register_widgets(){
//     register_widget('WP_Widget_Recent_Posts_Custom');
//     register_widget('WP_Widget_Recent_Comments_Custom');
//     register_widget('WP_Widget_Categories_Custom');
// }

// add_action('widgets_init', 'wordstrap_register_widgets');