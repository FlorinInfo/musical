export default {
	srcDir: './src',
	ssr: false,
	head: {
		title: 'Musical',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ name: 'format-detection', content: 'telephone=no' }
		]
	},
	css: [],
	plugins: [],
	components: true,
	buildModules: [
		'@nuxtjs/eslint-module',
		'@nuxtjs/stylelint-module'
	],
	modules: [
		'@nuxtjs/axios',
		'@nuxtjs/pwa'
	],
	axios: {},
	pwa: {
		icon: false,
		manifest: {
			lang: 'en'
		}
	},
	build: {}
};
