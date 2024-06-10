<?php

/**
 * Define the internationalization functionality
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @link       https://cornerstone-ms.co.uk
 * @since      1.0.0
 *
 * @package    Maverick_Translation
 * @subpackage Maverick_Translation/includes
 */

/**
 * Define the internationalization functionality.
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @since      1.0.0
 * @package    Maverick_Translation
 * @subpackage Maverick_Translation/includes
 * @author     Cornerstone <adam.greenwood@cornerstone-ms.co.uk>
 */
class Maverick_Translation_i18n {


	/**
	 * Load the plugin text domain for translation.
	 *
	 * @since    1.0.0
	 */
	public function load_plugin_textdomain() {

		load_plugin_textdomain(
			'maverick-translation',
			false,
			dirname( dirname( plugin_basename( __FILE__ ) ) ) . '/languages/'
		);

	}



}
