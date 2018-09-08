const path = require('path');


/**
 * @implements {IZBAddon}
 */
class Extension {
	/**
	 * @override
	 */
	getName() {
		return 'lodash';
	}

	/**
	 * @override
	 */
	getPublicDir() {
		return path.join(__dirname, 'lib');
	}

	/**
	 * @override
	 */
	getConfig() {
		return {
			'compilation': {
				'externs': [
					path.join(__dirname, 'externs', 'lodash.js')
				]
			},
			'jsLibs': [
				path.join(__dirname, 'vendor', 'lodash.js')
			]
		};
	}
}


module.exports = Extension;
