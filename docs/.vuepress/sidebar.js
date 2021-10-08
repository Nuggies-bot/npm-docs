const sidebar = {
	'/docs/': [
		{
			title: 'Getting Started',
			collapsable: false,
			children: ['./getting-started/installation'],
		},
		{
			title: 'Classes',
			children: [
				'./classes/main',
				'./classes/giveaways',
				'./classes/buttonroles',
				'./classes/dropdownroles',
				'./classes/applications',
			],
		},
	],
};

module.exports = sidebar;
