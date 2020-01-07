<?php
/**
 * Enqueue Assets
 * 
 * @package Illustrations
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

//add_action( 'enqueue_block_assets', 'ills_cgb_block_assets' );

/**
 * Enqueue editor assets for backend
 *
 * @since  1.0.0
 * @return void
 */
function ills_enqueue_editor_assets() {
    // JavaScript
    wp_enqueue_script(
		'ills-editor-js',
		plugins_url( 'dist/plugin.bundle.js', dirname( __FILE__ ) ), 
        [ 
            'wp-blocks', 
            'wp-i18n', 
            'wp-element',
            'wp-components',
            'wp-editor',
        ],
        ILLS_PLUGIN_VERSION,
        true
    );

    wp_localize_script( 'ills-editor-js', 'illustrationsBlock', [
        'pluginDirUrl' => trailingslashit( ILLS_PLUGIN_DIR_URL . 'dist' ),
        'idAttr' => ILLS_PLUGIN_ID_ATTR
    ] );
    
    // CSS
    wp_enqueue_style(
        'ills-editor',
        plugins_url( 'dist/css/editor.css', dirname( __FILE__ ) ),
        [ 'wp-edit-blocks' ],
        ILLS_PLUGIN_VERSION
    );
}
add_action( 'enqueue_block_editor_assets', 'ills_enqueue_editor_assets' );

/**
 * Enqueue front end assets
 *
 * @since  1.0.0
 * @return void
 */
function ills_enqueue_frontend_assets() {
    global $wp_query;

    if( ! is_object( $wp_query ) ) return;

    // CSS
    wp_enqueue_style(
        'ills-plugin-styles',
        plugins_url( 'dist/css/style.css', dirname( __FILE__ ) ),
        ILLS_PLUGIN_VERSION
    );

    // Go through all the current posts
    foreach( $wp_query->posts as $index => $post ) {

        $block_name = 'illustrations-block/illustration';
        $attr = ILLS_PLUGIN_ID_ATTR;

        // Check if the current post is of our type
        if( ! has_block( $block_name, $post->post_content ) ) continue;
        
        // Parse the post content for blocks
        $parsed = parse_blocks( $post->post_content );

        // Get some details from the parsed blocks, like id and attributes
        $blocks = array_map( function( $el ) use ( $attr ) {
            preg_match( 
                sprintf( '/%s="([a-z0-9]{7})"/s', $attr ), 
                $el[ 'innerHTML' ], $matches 
            );

            return [
                'id'    => $matches ? $matches[ 1 ] : '',
                'attrs' => $el[ 'attrs' ]
            ];
        }, ills_search_and_flatten( $parsed, 'blockName', $block_name ) );

        // Go through them and add necessary inline styles
        foreach( $blocks as $index => $details ) {
            $css = ills_inline_css( $details[ 'id' ], $details[ 'attrs' ] );
            $css = apply_filters( 'illustrations_inline_styles', $css, $post->ID, $details );

            wp_add_inline_style( 'ills-plugin-styles', $css );
        };
    }
}
add_action( 'wp_enqueue_scripts', 'ills_enqueue_frontend_assets' );

/**
 * Output generated CSS
 *
 * @since  1.0.0
 * @param  string $id    Block id
 * @param  array  $attrs Block attributes
 * @return string $css   Generated CSS
 */
function ills_inline_css( $id, $attrs ) {
    $attr = ILLS_PLUGIN_ID_ATTR;
    $default = 100;
    $css = '';
    
    if( $id === '' ) return;

    $mq_desktop = ' @media (min-width: 960px) { %s }';
    $mq_tablet  = ' @media (min-width: 600px) { %s }';
    $mq_mobile  = ' @media (min-width: 320px) { %s }';

    if( ! array_key_exists( 'size', $attrs ) ) return;

    $sizes = $attrs[ 'size' ];
    $align = array_key_exists( 'align', $attrs ) ? $attrs[ 'align' ] : false;

    foreach( $sizes as $size => $value ) {
        if( $value === $default ) continue;

        $value = absint( $value ) . '%';
        $size  = sanitize_key( $size );
        $mq    = ${ 'mq_' . $size };
        $el    = sprintf( 'div.wp-block-illustrations-block-illustration[%1$s="%2$s"]', $attr, esc_attr( $id ) );

        switch( $align ) {
            case false:
                $elements = sprintf( '%1$s { width: 100%% } %1$s .illustration-svg-container { width: %2$s }', $el, $value );
                $css .= sprintf( $mq, $elements );
                break;

            case 'center':
                $elements = sprintf( '%1$s { width: 100%%; text-align: center; } %1$s .illustration-svg-container { width: %2$s }', $el, $value );
                $css .= sprintf( $mq, $elements );
                break;

            case 'left':
            case 'right':
                $elements = sprintf( '%1$s { width: %2$s !important; max-width: %2$s !important } %1$s .illustration-svg-container { width: 100%% }', $el, $value );
                $css .= sprintf( $mq, $elements );
                break;
        }
        
    }

    return $css;
}