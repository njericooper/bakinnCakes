<?php
function baknn_enqueue_assets() {
  wp_enqueue_style( 'baknn-core', get_template_directory_uri() . '/style.css', array('baknn-app') );
  wp_enqueue_style( 'baknn-app', get_template_directory_uri() . '/css/shortcodes.css', array() );
  wp_enqueue_style( 'baknn-app', 'https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,300%7cAllura%7cPaytone+One', array() );

  wp_enqueue_script( 'baknn-core.min.js', get_template_directory_uri() . '/js/core.min.js', array(), null, true );
  wp_enqueue_script( 'baknn-core.script.js', get_template_directory_uri() . 'js/script.js', array(), null, true );
}
?>​
