module.exports = {
	extends: 'interfaced',
	overrides: [
		{
			files: ['index.js', 'scripts/build.js', '.eslintrc.js'],
			extends: 'interfaced/node'
		},
		{
			files: ['externs/**/*.js'],
			extends: 'interfaced/externs',
			rules: {
				'max-len': 'off'
			}
		}
	]
};
