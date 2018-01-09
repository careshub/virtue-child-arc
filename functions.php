<?php

/**
 * Add a sidebar that spans the width of the footer area.
 *
 * @since 1.0.0
 */
function arc_register_sidebars() {
	register_sidebar( array(
		'name' => __('Footer Logos Bar', 'virtue'),
		'id' => 'footer_logos_bar',
		'before_widget' => '<div class="footer-widget full-width sidebar-footer-logos"><aside id="%1$s" class="%2$s">',
		'after_widget' => '</aside></div>',
		'before_title' => '<h3>',
		'after_title' => '</h3>',
	) );
}
add_action( 'widgets_init', 'arc_register_sidebars', 99 );

add_filter( 'body_class', function( $classes ) {
    return array_merge( $classes, array( 'arc-bright-spots' ) );
} );

/**
 * Enqueue scripts and styles.
 *
 * @since 1.0.1
 */
function virtue_child_arc_scripts() {
	// Include the needed js file.
	wp_enqueue_script( 'virtue-child-arc-base-scripts', get_theme_file_uri( '/js/public.js' ), array( 'jquery' ), '1.0.1', true );
}
add_action( 'wp_enqueue_scripts', 'virtue_child_arc_scripts' );

/**
 * Don't show the footer logo bar on the about page.
 *
 * @since 1.0.0
 *
 * @param array     $instance The current widget instance's settings.
 * @param WP_Widget $widget   The current widget instance.
 * @param array     $args     An array of default widget arguments.
 */
function arc_hide_logo_bar_on_about_page( $instance, $widget, $args ) {

	if ( 'footer_logos_bar' === $args['id'] && is_page( 'about' ) ) {
		return false;
	}

	return $instance;

}
add_filter( 'widget_display_callback', 'arc_hide_logo_bar_on_about_page', 10, 3 );
