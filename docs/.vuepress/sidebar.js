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
				'./classes/applications',
				'./classes/buttonroles',
				'./classes/dropdownroles',
				'./classes/giveaways',
			],
		},
	],
};

module.exports = sidebar;
