module.exports = {
	extends: 'interfaced',
	overrides: [
		{
			files: ['index.js', 'scripts/build.js'],
			...require('eslint-config-interfaced/overrides/node')
		},
		{
			files: ['externs/**/*.js'],
			rules: {
				'max-len': 'off'
			}
		},
		{
			files: ['externs/**/*.js'],
			...require('eslint-config-interfaced/overrides/externs')
		},
	]
};
