<?php
function baknn_enqueue_assets() {
  wp_enqueue_style( 'baknn-core', get_template_directory_uri() . '/style.css', array('baknn-app') );
  wp_enqueue_style( 'baknn-app', get_template_directory_uri() . '/css/shortcodes.css', array() );
  wp_enqueue_style( 'baknn-app', 'https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,300%7cAllura%7cPaytone+One', array() );

  wp_enqueue_script( 'baknn-core.min.js', get_template_directory_uri() . '/js/core.min.js', array(), null, true );
  wp_enqueue_script( 'baknn-core.script.js', get_template_directory_uri() . 'js/script.js', array(), null, true );
}
​
add_action( 'wp_enqueue_scripts', 'baknn_enqueue_assets' );
​
function create_posttype() {
    register_post_type( 'baknn_service',
    // CPT Options
        array(
            'labels' => array(
                'name' => __( 'Services' ),
                'singular_name' => __( 'Service' )
            ),
            'public' => true,
            'has_archive' => true,
            'rewrite' => array('slug' => 'services'),
            'menu_icon' => 'dashicons-products',
            'supports' => array( 'title', 'editor', 'thumbnail', 'page-attributes')
        )
    );
​
    register_post_type( 'baknn_locations',
    // CPT Options
        array(
            'labels' => array(
                'name' => __( 'Locations' ),
                'singular_name' => __( 'location' )
            ),
            'public' => true,
            'has_archive' => true,
            'rewrite' => array('slug' => 'location'),
            'menu_icon' => 'dashicons-location',
            'supports' => array( 'title', 'thumbnail', 'page-attributes')
        )
    );
​
  }
  add_action( 'init', 'create_posttype' );
​
if( function_exists('acf_add_options_page') ) {
​
  acf_add_options_page(array(
    'page_title'  => 'Settings',
    'menu_title'  => 'Settings',
  ));
​
}
​
  ?>
