<?php
/**
 * Plugin Name: Illustrations
 * Plugin URI: 
 * Description: Illustrations Block, easy to customize SVGs from within the Editor 
 * Author: acosmin
 * Author URI: 
 * Version: 1.0.0
 * License: GPL3+
 * License URI: http://www.gnu.org/licenses/gpl-3.0.txt
 *
 * @package Illustrations
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Some constants
define( 'ILLS_PLUGIN_NAME', 'Illustrations' );

define( 'ILLS_PLUGIN',           __FILE__ );
define( 'ILLS_PLUGIN_VERSION',   '1.0.0'  );
define( 'ILLS_PLUGIN_MIN_WP',    '5.0.0'  );
define( 'ILLS_PLUGIN_MIN_PHP',   '5.5.0'  );

define( 'ILLS_PLUGIN_BASNAME',  plugin_basename( ILLS_PLUGIN ) );
define( 'ILLS_PLUGIN_DIR_PATH', plugin_dir_path( ILLS_PLUGIN ) );
define( 'ILLS_PLUGIN_DIR_URL',  plugin_dir_url( ILLS_PLUGIN ) );
define( 'ILLS_PLUGIN_ID_ATTR',  'data-illst-id' );

// Compatibility with WP, PHP versions
require ILLS_PLUGIN_DIR_PATH . 'inc/compatibility.php';

$ills_compatible = ills_compatible_versions();

if( ! $ills_compatible[ 'issue' ] ) {
	return;
}

// Initialize
require_once ILLS_PLUGIN_DIR_PATH . 'inc/utils.php';
require_once ILLS_PLUGIN_DIR_PATH . 'inc/enqueue.php';