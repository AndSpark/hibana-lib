import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
	lang: 'zh-CN',
	title: 'Hibana-Lib',
	description: '一个自用的工具库',
	theme: defaultTheme({
		navbar: [
			{
				text: '首页',
				link: '/'
			},
			{
				text: '库',
				link: '/lib'
			}
		],
		sidebar: {
			'/lib': [
				{
					text: '库',
					children: [
						'/lib/README.md',
						'/lib/vue-class-di.md',
						'/lib/vue-class-validator.md',
						'/lib/vue-message.md'
					]
				}
			]
		}
	})
})
