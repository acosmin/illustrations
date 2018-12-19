<?php
/**
 * Utility functions
 * 
 * @package Illustrations
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Search a multidimensional array for a key & value and flatten it
 *
 * @since  1.0.0
 * @param  array  $array Array to search
 * @param  string $key   Key to search for
 * @param  string $value Key's value
 * @return array         A flatten array with all the search results.
 */
function ills_search_and_flatten( $array, $key, $value ) {
    $results = []; 

    if (  is_array( $array ) ) { 
        if ( isset( $array[ $key ] ) && $array[ $key ] == $value ) 
            $results[] = $array; 

        foreach ( $array as $subarray ) {
            $results = array_merge( $results, ills_search_and_flatten( $subarray, $key, $value ) ); 
        } 
    } 

    return $results; 
}