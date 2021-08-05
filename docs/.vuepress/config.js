const sidebar = require('./sidebar.js');

module.exports = {
	title: 'Nuggies',
	base: '/',
	head: [
		['meta', { charset: 'utf-8' }],
		[
			'meta',
			{ name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
		],
		[
			'link',
			{ rel: 'icon', type: 'image/png', href: '/logo.png' },
		],
		['meta', { name: 'theme-color', content: '#fbad61' }],
		['meta', { property: 'og:site_name', content: 'Nuggies' }],
		['meta', { property: 'og:title', content: 'Nuggies' }],
		[
			'meta',
			{ property: 'og:description', content: 'A utility package for Discord Bots!' },
		],
		['meta', { property: 'og:type', content: 'website' }],
		['meta', { property: 'og:url', content: 'https://discord-buttons.js.org' }],
		['meta', { property: 'og:locale', content: 'en' }],
		[
			'meta',
			{ property: 'og:image', content: '/logo.png' },
		],
	],
	theme: 'succinct',
	globalUIComponents: ['ThemeManager'],
	themeConfig: {
		smoothScroll: true,
		searchPlaceholder: 'Search',
		repo: 'Nuggies-bot',
		lastUpdated: true,
		nav: [
			{
				text: 'Documentation',
				link: '/docs/getting-started/installation.html',
			},
		],
		sidebar,
	},

	markdown: {
		lineNumbers: true,
	},

	plugins: ['@vuepress/plugin-back-to-top', 'vuepress-plugin-element-tabs'],
};
