const path = require('path');
const {AbstractExtension} = require('zombiebox');


/**
 */
class Extension extends AbstractExtension {
	/**
	 * @override
	 */
	getName() {
		return 'lodash';
	}

	/**
	 * @override
	 */
	getSourcesDir() {
		return path.join(__dirname, 'lib');
	}

	/**
	 * @override
	 */
	getConfig() {
		return {
			include: [
				{
					name: 'Lodash',
					externs: [
						path.join(__dirname, 'externs', 'lodash.js')
					],
					inlineScripts: [
						path.join(__dirname, 'vendor', 'lodash.js')
					]
				}
			]
		};
	}
}


module.exports = Extension;
