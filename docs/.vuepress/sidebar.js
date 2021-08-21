const sidebar = {
	'/docs/': [
		{
			title: 'Getting Started',
			collapsable: false,
			children: [
				'./getting-started/installation',
			],
		},
		{
			title: 'Classes',
			children: ['./classes/applications',
				'./classes/buttonroles',],
		},
	],
};

module.exports = sidebar;