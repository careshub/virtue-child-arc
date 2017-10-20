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
