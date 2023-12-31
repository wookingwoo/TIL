var CONST = require('./const');

module.exports = {
	title: `Today wookingwoo Learned`,
	description: `wookingwoo's Personal Wiki (Today I Learned)`,
	// base: "/TIL/",
	base: '/',
	dest: 'build',
	head: [
		[
			'link',
			{
				rel: 'icon',
				href: '/logo.png',
			},
		],
	],
	themeConfig: {
		sidebar: [
			{
				title: 'Monthly I Learned',
				children: CONST.MILList,
			},

			{
				title: 'Data structure and Algorithm',
				children: CONST.DataStructureAndAlgorithmList,
			},
			{
				title: 'Daily Coding',
				children: CONST.DailyCodingList,
			},
			{
				title: 'Python',
				children: CONST.PythonList,
			},
			{
				title: 'Redis',
				children: CONST.RedisList,
			},
			{
				title: 'Git',
				children: CONST.gitList,
			},

			{
				title: 'ETC',
				children: CONST.ETCList,
			},
		],
		nav: [
			{
				text: 'GitHub',
				link: 'https://github.com/wookingwoo/',
			},
			{
				text: 'Blog',
				link: 'https://blog.wookingwoo.com/',
			},
		],
	},
};