export default {
	srcDir: './src',
	ssr: false,
	head: {
		title: 'Musical',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ name: 'format-detection', content: 'telephone=no' }
		],
		script: [
			{ src: 'https://unpkg.com/ionicons@5.4.0/dist/ionicons.js' },
		]
	},
	css: [
		'~/assets/styles/_variables.scss',
		'~/assets/styles/_base.scss',
		'~/assets/styles/_fonts.scss'
	],
	styleResources: {
		scss: ['~/assets/styles/*.scss']
	},
	plugins: [],
	components: true,
	buildModules: [
		'@nuxtjs/eslint-module',
		'@nuxtjs/stylelint-module'
	],
	modules: [
		'@nuxtjs/axios',
		'@nuxtjs/pwa',
		'@nuxtjs/style-resources'
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
