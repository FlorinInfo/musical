module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	parserOptions: {
		parser: '@babel/eslint-parser',
		requireConfigFile: false
	},
	extends: [
		'@nuxtjs',
		'plugin:nuxt/recommended'
	],
	plugins: [],
	rules: {
		'no-tabs': 'off',
		'quote-props': ['warn', 'consistent'],
		'indent': ['warn', 'tab'],
		'semi': ['error', 'always'],
		'quotes': ['error', 'single'],
		'curly': ['warn', 'all'],
		'eqeqeq': ['warn', 'smart'],
		'no-extra-bind': 'error',
		'brace-style': ['error', '1tbs'],
		'vue/html-indent': ['error', 'tab', {
			'attribute': 1,
			'baseIndent': 1,
			'closeBracket': 0,
			'alignAttributesVertically': true
		}],
		'vue/singleline-html-element-content-newline': 'off',
		'vue/max-attributes-per-line': ['error', {
			'singleline': 3,
			'multiline': {
				'max': 1,
				'allowFirstLine': false
			}
		}]
	}
};
