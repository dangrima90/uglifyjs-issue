const autoprefixer = require('autoprefixer');

module.exports = {
	plugins: [
		autoprefixer({
			browsers: [
				'last 1000 versions'
			]
		})
	]
};
